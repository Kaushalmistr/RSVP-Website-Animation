interface InvitationTextProps {
  names: string[];
  date: string;
  visible: boolean;
}

export default function InvitationText({ visible }: InvitationTextProps) {
  return (
    <div
      className={`pointer-events-none fixed inset-x-0 bottom-[8vh] z-[6] flex flex-col items-center gap-2 transition-opacity duration-700 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* "You're Invited" in cursive */}
      <p
        style={{
          fontFamily: "var(--font-great-vibes), 'Great Vibes', cursive",
          fontSize: "clamp(28px, 6vw, 44px)",
          color: "#3d5a3a",
          textShadow: "0 1px 4px rgba(0,0,0,0.08)",
          animation: "tapPulse 2.8s ease-in-out infinite",
          lineHeight: 1.2,
        }}
      >
        You&apos;re Invited
      </p>

      {/* Sub-text */}
      <p
        style={{
          fontFamily: "var(--font-poppins), Poppins, sans-serif",
          fontSize: "clamp(10px, 2.5vw, 13px)",
          color: "#4a6648",
          letterSpacing: "0.12em",
          opacity: 0.8,
          animation: "tapPulse 2.8s ease-in-out 0.3s infinite",
        }}
      >
        Tap the envelope to open your invitation
      </p>
    </div>
  );
}
