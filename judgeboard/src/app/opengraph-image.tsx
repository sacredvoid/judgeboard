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
          background: "#FAF9F7",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px 100px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Colored pin strip at top */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 6,
            display: "flex",
          }}
        >
          {["#7C3AED", "#EA580C", "#059669", "#0284C7", "#DC2626", "#D97706", "#B45309"].map(
            (color) => (
              <div key={color} style={{ flex: 1, backgroundColor: color }} />
            )
          )}
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            fontSize: 64,
            fontWeight: 700,
            letterSpacing: "-0.03em",
          }}
        >
          <span style={{ color: "#2C2A25" }}>Judge</span>
          <span style={{ color: "#B45309" }}>Board</span>
        </div>
        <div
          style={{
            marginTop: 20,
            fontSize: 30,
            color: "#6B6660",
            lineHeight: 1.4,
            maxWidth: 700,
          }}
        >
          Find hackathons that need your expertise
        </div>
        <div
          style={{
            marginTop: 40,
            display: "flex",
            gap: 12,
          }}
        >
          {["Judge", "Mentor", "O-1A Eligible"].map((label) => (
            <div
              key={label}
              style={{
                padding: "8px 18px",
                borderRadius: 6,
                backgroundColor: label === "O-1A Eligible" ? "#FEF3C7" : "#F0ECE7",
                color: label === "O-1A Eligible" ? "#78350F" : "#6B6660",
                fontSize: 20,
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
