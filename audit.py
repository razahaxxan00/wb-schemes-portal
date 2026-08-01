import os
import re
from pathlib import Path
from html.parser import HTMLParser

base_dir = Path(r"C:\Users\Raza Hassan\.gemini\antigravity-ide\scratch\wb-schemes-portal")

html_files = list(base_dir.rglob("*.html"))

print(f"Total HTML files found: {len(html_files)}")

placeholder_pattern = re.compile(r'\[(?:ADD|Note|verify)[^\]]*\]', re.IGNORECASE)

issues = []

for file_path in html_files:
    rel_path = file_path.relative_to(base_dir).as_posix()
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()

    # 1. Meta & Title Check
    has_title = "<title>" in content and "</title>" in content
    has_desc = 'name="description"' in content or "name='description'" in content
    
    title_match = re.search(r'<title>(.*?)</title>', content, re.IGNORECASE | re.DOTALL)
    title_text = title_match.group(1).strip() if title_match else None

    if not has_title or not title_text:
        issues.append((rel_path, "META_MISSING", "Missing or empty <title> tag"))
    if not has_desc:
        issues.append((rel_path, "META_MISSING", "Missing meta description tag"))

    # 2. Asset & Script Links Depth Check
    # Check css link
    css_links = re.findall(r'<link[^>]+href=["\']([^"\']+)["\']', content)
    js_links = re.findall(r'<script[^>]+src=["\']([^"\']+)["\']', content)

    for link in css_links + js_links:
        if link.startswith("http") or link.startswith("//"):
            continue
        # Resolve path
        target_path = (file_path.parent / link).resolve()
        if not target_path.exists():
            issues.append((rel_path, "BROKEN_ASSET", f"Asset link '{link}' does not exist -> {target_path}"))

    # 3. Internal Links Check (href)
    hrefs = re.findall(r'<a[^>]+href=["\']([^"\']+)["\']', content)
    for href in hrefs:
        if href.startswith("http") or href.startswith("//") or href.startswith("mailto:") or href.startswith("tel:"):
            continue
        if href == "#":
            issues.append((rel_path, "PLACEHOLDER_LINK", f"Unlinked internal target href='#'"))
            continue
        
        # Remove anchor if any
        clean_href = href.split("#")[0]
        if not clean_href:
            continue
            
        target_path = (file_path.parent / clean_href).resolve()
        if not target_path.exists():
            issues.append((rel_path, "BROKEN_LINK", f"Link href='{href}' points to non-existent file -> {target_path}"))

    # 4. Bracketed Placeholders Check
    placeholders = placeholder_pattern.findall(content)
    for p in set(placeholders):
        issues.append((rel_path, "PLACEHOLDER_TEXT", f"Bracketed placeholder text found: '{p}'"))

    # 5. Component Checks
    # Breadcrumb check (except homepage index.html)
    if rel_path != "index.html":
        if 'class="breadcrumb' not in content and 'aria-label="Breadcrumb"' not in content:
            issues.append((rel_path, "MISSING_COMPONENT", "Breadcrumb navigation missing"))

print("\n--- AUDIT RESULTS ---")
print(f"Total issues flagged: {len(issues)}")

grouped = {}
for path, cat, msg in issues:
    grouped.setdefault(path, []).append((cat, msg))

for path in sorted(grouped.keys()):
    print(f"\n📄 PAGE: /{path}")
    for cat, msg in grouped[path]:
        print(f"  - [{cat}] {msg}")
