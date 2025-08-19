import { useEffect, useState } from "react";

export default function Home() {
  const [time, setTime] = useState("Loading...");

  useEffect(() => {
    fetch("/api/time")
      .then((res) => res.json())
      .then((data) => setTime(data.now))
      .catch(() => setTime("Failed to fetch time"));
  }, []);

  return (
    <div style={{ fontFamily: "Arial", textAlign: "center", padding: "50px" }}>
      <h1>🌍 Dynamic Next.js App</h1>
      <p>This page shows live server time (Africa/Kampala):</p>
      <h2>{time}</h2>
    </div>
  );
}
