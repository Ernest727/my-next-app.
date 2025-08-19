export default function handler(req, res) {
  const now = new Date().toLocaleString("en-UG", { timeZone: "Africa/Kampala" });
  res.status(200).json({ now });
}
