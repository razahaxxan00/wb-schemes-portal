export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { name, email, subject, message } = req.body || {};

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Name, email, and message are required fields.' });
    }

    const formspreeEndpoint = process.env.VITE_FORMSPREE_ENDPOINT || process.env.FORMSPREE_ENDPOINT;

    if (formspreeEndpoint) {
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({ name, email, subject, message })
      });

      if (response.ok) {
        return res.status(200).json({ success: true, message: "Thanks, we've received your message and will get back to you." });
      } else {
        const errorData = await response.json().catch(() => ({}));
        return res.status(response.status).json({ error: errorData.error || 'Forwarding to Formspree failed.' });
      }
    }

    // Default Vercel Serverless Function response logging submission
    console.log(`[Contact Form Received] Name: ${name}, Email: ${email}, Subject: ${subject}, Message: ${message}`);

    return res.status(200).json({
      success: true,
      message: "Thanks, we've received your message and will get back to you."
    });

  } catch (err) {
    console.error('Serverless function error:', err);
    return res.status(500).json({ error: 'Internal Server Error. Please try submitting again.' });
  }
}
