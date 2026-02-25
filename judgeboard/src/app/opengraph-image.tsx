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
          background: "linear-gradient(135deg, #eef2ff 0%, #ffffff 50%, #f5f3ff 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            fontSize: 72,
            fontWeight: 800,
            letterSpacing: "-0.03em",
          }}
        >
          <span style={{ color: "#18181b" }}>Judge</span>
          <span style={{ color: "#4f46e5" }}>Board</span>
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 32,
            color: "#52525b",
            maxWidth: 700,
            textAlign: "center",
            lineHeight: 1.4,
          }}
        >
          Find hackathons that need your expertise
        </div>
        <div
          style={{
            marginTop: 40,
            display: "flex",
            gap: 16,
          }}
        >
          {["Judge", "Mentor", "O-1A Eligible"].map((label) => (
            <div
              key={label}
              style={{
                padding: "8px 20px",
                borderRadius: 999,
                backgroundColor: label === "O-1A Eligible" ? "#eef2ff" : "#f4f4f5",
                color: label === "O-1A Eligible" ? "#4338ca" : "#52525b",
                fontSize: 22,
                fontWeight: 600,
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
