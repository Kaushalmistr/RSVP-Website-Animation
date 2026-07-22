import { useRef, useState, useCallback } from "react";
import gsap from "gsap";
import Envelope from "./Envelope";
import FallingFlowers from "./FallingFlowers";
import FloatingParticles from "./FloatingParticles";
import InvitationText from "./invitationText";
import InvitationCard from "./InvitationCard";
import ScratchCard from "./ScratchCard";
import Navigation from "./Navigation";
import CountdownTimer from "./CountdownTimer";
import StoryEnhanced from "./Story";
import EventsEnhanced from "./Events";
import GalleryEnhanced from "./Gallery";
import RSVP from "./RSVP";
import Footer from "./Footer";

interface LandingScreenProps {
  names: string[];
  date: string;
}

export default function LandingScreen({ names, date }: LandingScreenProps) {
  const [phase, setPhase] = useState<"idle" | "opening" | "opened">("idle");
  const flap = useRef<HTMLDivElement>(null);
  const seal = useRef<HTMLDivElement>(null);
  const letter = useRef<HTMLDivElement>(null);
  const envelopeScene = useRef<HTMLDivElement>(null);
  const websiteContent = useRef<HTMLDivElement>(null);

  const open = useCallback(() => {
    if (phase !== "idle") return;
    setPhase("opening");

    const tl = gsap.timeline({
      onComplete: () => {
        setPhase("opened");
        // Clear GSAP styles from website content to let normal scroll work clean
        if (websiteContent.current) {
          gsap.set(websiteContent.current, { clearProps: "pointerEvents" });
        }
      },
    });

    // 1. Seal breaks — slight grow then shrink away with rotation
    tl.to(seal.current, {
      scale: 1.3,
      duration: 0.2,
      ease: "power2.out",
    }).to(seal.current, {
      scale: 0,
      opacity: 0,
      rotate: 50,
      duration: 0.4,
      ease: "back.in(1.8)",
    });

    // 2. Flap opens — 3D rotation upward
    tl.to(
      flap.current,
      { rotateX: -180, duration: 0.9, ease: "power3.inOut" },
      "-=0.1"
    ).set(flap.current, { zIndex: 0 }, ">-0.4");

    // 3. Letter rises out of envelope
    tl.to(
      letter.current,
      {
        y: "-65%",
        scale: 1.06,
        duration: 0.8,
        ease: "power2.out",
      },
      "-=0.45"
    ).to(
      letter.current,
      {
        boxShadow: "0 30px 80px rgba(0,0,0,.3)",
        duration: 0.4,
      },
      "<"
    );

    // 4. Simultaneous cross-fade: fade out envelope and fade in website content
    tl.to(
      envelopeScene.current,
      {
        opacity: 0,
        scale: 0.95,
        duration: 1.2,
        ease: "power2.inOut",
      },
      "+=0.4"
    ).to(
      websiteContent.current,
      {
        opacity: 1,
        pointerEvents: "auto",
        duration: 1.2,
        ease: "power2.inOut",
      },
      "<"
    );
  }, [phase]);

  return (
    <div className="relative min-h-screen w-full bg-[#FAF6EE]">
      {/* ─── MAIN WEBSITE CONTENT (fades in under envelope overlay) ─── */}
      <div
        ref={websiteContent}
        style={{ opacity: 0, pointerEvents: "none" }}
        className="w-full"
      >
        <Navigation />
        <InvitationCard
          names={names}
          date={date}
          visible={phase === "opened" || phase === "opening"}
        />
        <ScratchCard date="31st Dec" year="2026" targetDate="2026-12-31" />
        <CountdownTimer targetDate="2026-12-31" />
        <StoryEnhanced />
        <EventsEnhanced />
        <GalleryEnhanced />
        <RSVP />
        <Footer />
      </div>

      {/* ─── ENVELOPE SCENE OVERLAY (sits on top, fades out) ─── */}
      {phase !== "opened" && (
        <div
          ref={envelopeScene}
          className="fixed inset-0 overflow-hidden z-[50] w-full h-full"
          style={{
            background:
              "radial-gradient(ellipse 130% 100% at 50% 0%, #b0bfa0 0%, #96a886 35%, #8a9c78 65%, #7d9070 100%)",
          }}
        >
          {/* Subtle vignette overlay */}
          <div
            className="fixed inset-0 pointer-events-none z-[0]"
            style={{
              background:
                "radial-gradient(ellipse 80% 80% at 50% 50%, transparent 40%, rgba(0,0,0,0.12) 100%)",
            }}
          />

          <FallingFlowers count={20} layer="back" />
          <FloatingParticles count={12} />

          <Envelope
            names={names}
            date={date}
            onOpen={open}
            refs={{ flap, seal, letter }}
          />

          <FallingFlowers count={8} layer="front" />
          <InvitationText names={names} date={date} visible={phase === "idle"} />
        </div>
      )}
    </div>
  );
}