export default function handler(req, res) {
  const now = new Date().toLocaleString("en-UG", { timeZone: "Africa/Kampala" });
  const server = process.env.VERCEL ? "Vercel" : (process.env.NETLIFY ? "Netlify" : "Node server");
  res.status(200).json({ now, server });
}
