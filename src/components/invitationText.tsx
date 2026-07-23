interface InvitationTextProps {
  names: string[];
  date: string;
  visible: boolean;
}

export default function InvitationText({ visible }: InvitationTextProps) {
  return (
    <div
      className={`mt-10 text-center animate-fade-up delay-300 transition-opacity duration-700 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <h2 className="font-cursive text-4xl sm:text-5xl text-sage-deep leading-none">
        You&apos;re Invited
      </h2>

      <p className="mt-2 font-serif-display text-sage-deep/80 italic tracking-wide">
        Tap the envelope to open your invitation
      </p>
    </div>
  );
}
