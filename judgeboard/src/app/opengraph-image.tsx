import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "JudgeBoard — Find Hackathon Judge & Mentor Opportunities";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0C0A09",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px 100px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "baseline", fontSize: 64, fontWeight: 700, letterSpacing: "-0.03em" }}>
          <span style={{ color: "#FAFAF9" }}>Judge</span>
          <span style={{ color: "#99F6E4" }}>Board</span>
        </div>
        <div style={{ marginTop: 20, fontSize: 30, color: "#A8A29E", lineHeight: 1.4, maxWidth: 700 }}>
          Find hackathons that need your expertise
        </div>
        <div style={{ marginTop: 48, display: "flex", gap: 12 }}>
          {["Judge", "Mentor", "O-1A Eligible"].map((label) => (
            <div
              key={label}
              style={{
                padding: "8px 18px",
                borderRadius: 8,
                backgroundColor: label === "O-1A Eligible" ? "#0F766E20" : "#1C1917",
                color: label === "O-1A Eligible" ? "#99F6E4" : "#A8A29E",
                fontSize: 20,
                fontWeight: 600,
                border: "1px solid #292524",
              }}
            >
              {label}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
