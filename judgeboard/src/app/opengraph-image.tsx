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
          background: "#0F172A",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px 100px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Topic color bar at top */}
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
          {["#8B5CF6", "#F97316", "#10B981", "#06B6D4", "#EF4444", "#F59E0B"].map((color) => (
            <div key={color} style={{ flex: 1, backgroundColor: color }} />
          ))}
        </div>

        <div style={{ display: "flex", alignItems: "baseline", fontSize: 64, fontWeight: 700, letterSpacing: "-0.03em" }}>
          <span style={{ color: "#FFFFFF" }}>Judge</span>
          <span style={{ color: "#F59E0B" }}>Board</span>
        </div>
        <div style={{ marginTop: 20, fontSize: 30, color: "#94A3B8", lineHeight: 1.4, maxWidth: 700 }}>
          Find hackathons that need your expertise
        </div>
        <div style={{ marginTop: 40, display: "flex", gap: 12 }}>
          {[
            { label: "Judge", color: "#475569", bg: "#1E293B" },
            { label: "Mentor", color: "#475569", bg: "#1E293B" },
            { label: "O-1A Eligible", color: "#7C3AED", bg: "#EDE9FE20" },
          ].map(({ label, color, bg }) => (
            <div
              key={label}
              style={{
                padding: "8px 18px",
                borderRadius: 8,
                backgroundColor: bg,
                color: label === "O-1A Eligible" ? "#C4B5FD" : color,
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
