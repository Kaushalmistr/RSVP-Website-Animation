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
        className="font-cursive text-rose-deep animate-[tapPulse_2.8s_ease-in-out_infinite]"
        style={{
          fontSize: "clamp(28px, 6vw, 44px)",
          textShadow: "0 1px 4px rgba(0,0,0,0.08)",
          lineHeight: 1.2,
        }}
      >
        You&apos;re Invited
      </p>

      {/* Sub-text */}
      <p
        className="font-cinzel tracking-widest text-ink/80 uppercase animate-[tapPulse_2.8s_ease-in-out_0.3s_infinite]"
        style={{
          fontSize: "clamp(10px, 2.5vw, 13px)",
        }}
      >
        Tap the envelope to open your invitation
      </p>
    </div>
  );
}
