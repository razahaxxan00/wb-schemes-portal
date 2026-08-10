const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const rootDir = __dirname;

// SVG Design matching the site header logo emblem:
// Circular deep teal/navy background (#0b3c5d), gold accent ring (#d9b310), bold white "WB" text
const createSvg = (size, isSmall = false) => {
  const strokeWidth = isSmall ? Math.max(2, Math.round(size * 0.08)) : Math.max(4, Math.round(size * 0.05));
  const fontSize = Math.round(size * 0.48);
  const textY = Math.round(size * 0.65);
  
  return `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
    <circle cx="${size/2}" cy="${size/2}" r="${size/2 - strokeWidth/2}" fill="#0b3c5d" stroke="#d9b310" stroke-width="${strokeWidth}" />
    <text x="${size/2}" y="${textY}" font-family="System-UI, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif" font-weight="900" font-size="${fontSize}" fill="#ffffff" text-anchor="middle" dominant-baseline="middle">WB</text>
  </svg>`;
};

// Function to construct a multi-resolution ICO file from PNG buffers
function createIco(pngBuffers) {
  const numImages = pngBuffers.length;
  const headerSize = 6;
  const directorySize = 16 * numImages;
  
  let dataOffset = headerSize + directorySize;
  const header = Buffer.alloc(headerSize);
  header.writeUInt16LE(0, 0); // Reserved
  header.writeUInt16LE(1, 2); // Image type (1 = ICO)
  header.writeUInt16LE(numImages, 4); // Number of images

  const directories = [];
  const imagePayloads = [];

  for (const item of pngBuffers) {
    const dir = Buffer.alloc(16);
    const width = item.width >= 256 ? 0 : item.width;
    const height = item.height >= 256 ? 0 : item.height;
    
    dir.writeUInt8(width, 0);       // Width
    dir.writeUInt8(height, 1);      // Height
    dir.writeUInt8(0, 2);           // Color palette count
    dir.writeUInt8(0, 3);           // Reserved
    dir.writeUInt16LE(1, 4);        // Color planes
    dir.writeUInt16LE(32, 6);       // Bits per pixel
    dir.writeUInt32LE(item.buffer.length, 8); // Size of image data
    dir.writeUInt32LE(dataOffset, 12);        // Offset of image data

    directories.push(dir);
    imagePayloads.push(item.buffer);
    dataOffset += item.buffer.length;
  }

  return Buffer.concat([header, ...directories, ...imagePayloads]);
}

async function buildFavicons() {
  console.log('Generating favicon assets...');

  // 1. Generate PNGs
  const targets = [
    { name: 'favicon-16x16.png', size: 16, small: true },
    { name: 'favicon-32x32.png', size: 32, small: true },
    { name: 'apple-touch-icon.png', size: 180, small: false },
    { name: 'android-chrome-192x192.png', size: 192, small: false },
    { name: 'android-chrome-512x512.png', size: 512, small: false },
    { name: 'favicon-48x48.png', size: 48, small: true }
  ];

  const icoPngItems = [];

  for (const t of targets) {
    const svgBuf = Buffer.from(createSvg(t.size, t.small));
    const outPath = path.join(rootDir, t.name);
    const pngBuffer = await sharp(svgBuf)
      .resize(t.size, t.size)
      .png()
      .toBuffer();
    
    fs.writeFileSync(outPath, pngBuffer);
    console.log(`Created ${t.name} (${t.size}x${t.size})`);
    
    if (t.size === 16 || t.size === 32 || t.size === 48) {
      icoPngItems.push({ width: t.size, height: t.size, buffer: pngBuffer });
    }
  }

  // 2. Generate multi-resolution favicon.ico (16x16, 32x32, 48x48)
  const icoBuffer = createIco(icoPngItems);
  const icoPath = path.join(rootDir, 'favicon.ico');
  fs.writeFileSync(icoPath, icoBuffer);
  console.log('Created favicon.ico (16x16, 32x32, 48x48 multi-resolution)');

  // Clean up temporary 48x48 PNG if not needed separately
  if (fs.existsSync(path.join(rootDir, 'favicon-48x48.png'))) {
    fs.unlinkSync(path.join(rootDir, 'favicon-48x48.png'));
  }

  // 3. Create site.webmanifest
  const manifest = {
    name: "WB Schemes Portal",
    short_name: "WB Schemes",
    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png"
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png"
      }
    ],
    theme_color: "#0b3c5d",
    background_color: "#f8fafc",
    display: "standalone"
  };

  const manifestPath = path.join(rootDir, 'site.webmanifest');
  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2), 'utf8');
  console.log('Created site.webmanifest');
}

buildFavicons().catch(err => {
  console.error('Favicon generation error:', err);
  process.exit(1);
});
