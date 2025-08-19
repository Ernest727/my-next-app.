import { useEffect, useState } from "react";

export default function Home() {
  const [time, setTime] = useState("Loading...");
  const [server, setServer] = useState("");

  useEffect(() => {
    fetch("/api/time")
      .then((res) => res.json())
      .then((data) => {
        setTime(data.now);
        setServer(data.server);
      })
      .catch(() => setTime("Failed to fetch time"));
  }, []);

  return (
    <div style={{ fontFamily: "Inter, Arial, sans-serif", minHeight: "100vh", display: "grid", placeItems: "center", padding: 24 }}>
      <div style={{ maxWidth: 720, width: "100%", textAlign: "center" }}>
        <h1 style={{ fontSize: 36, marginBottom: 8 }}>🌍 Dynamic Next.js App</h1>
        <p style={{ fontSize: 16, opacity: 0.8, marginBottom: 24 }}>
          This page fetches live server time from an API route (Africa/Kampala).
        </p>

        <div style={{ padding: 20, border: "1px solid #e5e7eb", borderRadius: 16, boxShadow: "0 8px 24px rgba(0,0,0,0.06)", marginBottom: 16 }}>
          <div style={{ fontSize: 14, opacity: 0.7, marginBottom: 6 }}>Current server time:</div>
          <div style={{ fontSize: 28, fontWeight: 700 }}>{time}</div>
        </div>

        <div style={{ fontSize: 12, opacity: 0.6 }}>
          Served by: {server || "loading..."}
        </div>
      </div>
    </div>
  );
}
