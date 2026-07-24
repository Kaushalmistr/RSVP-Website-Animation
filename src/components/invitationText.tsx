interface InvitationTextProps {
  names: string[];
  date: string;
  visible: boolean;
}

export default function InvitationText({ visible }: InvitationTextProps) {
  return (
    <div
      className={`pointer-events-none fixed inset-x-0 bottom-[8vh] z-[6] flex flex-col items-center gap-1 transition-opacity duration-700 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* "You're Invited" in cursive — delicate, dark ink, not oversized */}
      <p
        className="font-cursive text-ink animate-[tapPulse_2.8s_ease-in-out_infinite]"
        style={{
          fontSize: "clamp(24px, 4.5vw, 36px)",
          lineHeight: 1.15,
          letterSpacing: "0.01em",
        }}
      >
        You&apos;re Invited
      </p>

      {/* Sub-text — lowercase italic serif, muted sage, small and refined */}
      <p
        className="font-serif-display italic text-ink/50 animate-[tapPulse_2.8s_ease-in-out_0.3s_infinite]"
        style={{
          fontSize: "clamp(10px, 1.8vw, 12px)",
          letterSpacing: "0.04em",
          lineHeight: 1.4,
        }}
      >
        Tap the envelope to open your invitation
      </p>
    </div>
  );
}
