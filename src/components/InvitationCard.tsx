import React, { useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface InvitationCardProps {
  names: string[];
  date: string;
  visible: boolean;
}

/* ─── Premium Sakura Petal SVG ─── */
const SakuraPetal = ({ size, color }: { size: number; color: string }) => (
  <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M20 5C26 5 31 10 32 17C33 24 28 32 20 35C12 32 7 24 8 17C9 10 14 5 20 5Z"
      fill={color}
      opacity="0.8"
    />
    <path
      d="M20 10C23 10 26 13 26 17C26 21 23 25 20 27"
      stroke="rgba(255,255,255,0.25)"
      strokeWidth="1"
      strokeLinecap="round"
    />
  </svg>
);

/* ─── Premium Sage Leaf SVG ─── */
const SageLeaf = ({ size, color }: { size: number; color: string }) => (
  <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M20,2 C27,8 30,18 26,28 C23,34 20,38 20,38 C20,38 17,34 14,28 C10,18 13,8 20,2 Z"
      fill={color}
      opacity="0.75"
    />
    <path
      d="M20 4 L20 36"
      stroke="rgba(255,255,255,0.25)"
      strokeWidth="1.2"
    />
    <path
      d="M20 12 Q24 16 25 18 M20 18 Q16 22 15 24 M20 24 Q24 28 25 30"
      stroke="rgba(255,255,255,0.15)"
      strokeWidth="0.8"
    />
  </svg>
);

/* ─── Premium Botanical Corner SVGs ─── */
const CornerBotanical = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg
    className={className}
    style={style}
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Main stem */}
    <path
      d="M10,10 Q60,30 100,100 Q120,130 180,180"
      stroke="#8fa07e"
      strokeWidth="2.5"
      strokeLinecap="round"
      opacity="0.5"
    />
    <path
      d="M30,18 Q70,45 85,85"
      stroke="#8fa07e"
      strokeWidth="1.8"
      strokeLinecap="round"
      opacity="0.4"
    />
    {/* Leaves */}
    <path d="M50,25 C45,15 35,10 30,15 C25,20 28,30 38,35 C48,40 55,35 50,25 Z" fill="#9cb08c" opacity="0.6" />
    <path d="M72,42 C68,32 58,28 53,33 C48,38 50,48 60,53 C70,58 77,52 72,42 Z" fill="#9cb08c" opacity="0.6" />
    <path d="M92,68 C90,56 80,50 74,54 C68,58 69,69 77,75 C85,81 94,80 92,68 Z" fill="#8aa179" opacity="0.55" />
    <path d="M106,98 C108,86 100,78 94,81 C88,84 86,94 93,101 C100,108 108,110 106,98 Z" fill="#8aa179" opacity="0.55" />
    <path d="M125,122 C130,112 125,102 118,103 C111,104 107,112 112,120 C117,128 128,132 125,122 Z" fill="#7a9069" opacity="0.5" />
    <path d="M148,145 C155,138 152,128 145,127 C138,126 132,132 135,140 C138,148 148,152 148,145 Z" fill="#7a9069" opacity="0.5" />
    {/* Blossoms */}
    <circle cx="48" cy="18" r="4" fill="#f5dce0" opacity="0.7" />
    <circle cx="85" cy="45" r="3" fill="#f5dce0" opacity="0.7" />
    <circle cx="118" cy="85" r="3.5" fill="#f2ccd4" opacity="0.65" />
  </svg>
);

/* ─── Premium Gold Outline Ganesha SVG ─── */
const GaneshGoldIcon = () => (
  <svg
    width="64"
    height="72"
    viewBox="0 0 100 110"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="mx-auto"
  >
    {/* Crown (Mukut) */}
    <path d="M42,15 L50,5 L58,15 L55,25 L45,25 Z" stroke="#c9a961" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M45,20 L50,12 L55,20" stroke="#c9a961" strokeWidth="1.5" />
    
    {/* Head and Ears */}
    <path d="M35,35 Q20,35 25,48 Q30,55 40,50" stroke="#c9a961" strokeWidth="2" strokeLinecap="round" />
    <path d="M65,35 Q80,35 75,48 Q70,55 60,50" stroke="#c9a961" strokeWidth="2" strokeLinecap="round" />
    
    {/* Forehead details / Tilak */}
    <path d="M50,25 L50,38" stroke="#c4873a" strokeWidth="2" strokeLinecap="round" />
    <path d="M47,30 Q50,32 53,30" stroke="#c4873a" strokeWidth="1.5" />
    <circle cx="50" cy="27" r="1.5" fill="#c4873a" />

    {/* Face profile and Trunk */}
    <path d="M44,38 Q50,36 56,38 Q52,50 56,58 Q60,66 65,65 Q70,64 71,58" stroke="#c9a961" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    
    {/* Modak and Hand */}
    <circle cx="73" cy="58" r="2.5" fill="#c9a961" />
    <path d="M70,62 Q75,65 73,70" stroke="#c9a961" strokeWidth="1.5" />
    
    {/* Left Tusk */}
    <path d="M45,46 L40,47" stroke="#c9a961" strokeWidth="2" strokeLinecap="round" />
    
    {/* Eyes */}
    <path d="M43,42 C44,42 45,41 45,40" stroke="#c4873a" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M57,42 C56,42 55,41 55,40" stroke="#c4873a" strokeWidth="1.5" strokeLinecap="round" />

    {/* Decorative halo backdrop */}
    <circle cx="50" cy="45" r="38" stroke="#c9a961" strokeWidth="0.75" strokeDasharray="3 4" opacity="0.4" />
  </svg>
);

export default function InvitationCard({ names, date, visible }: InvitationCardProps) {
  const shouldReduceMotion = useReducedMotion();
  const isRushikesh = names[0]?.toLowerCase().includes("rushikesh");

  // Procedural spread particles for falling sakura petals and leaves
  const particles = useMemo(() => {
    const PETAL_COLORS = ["#FFF0F2", "#FFE3E8", "#FFD1D9", "#FCE2E6"];
    const LEAF_COLORS = ["#C5D3B8", "#B6C7A9", "#A3B595", "#8A9A7A"];

    return Array.from({ length: 22 }).map((_, i) => {
      const type = i % 3 === 0 ? "leaf" : "petal";
      const color = type === "petal"
        ? PETAL_COLORS[i % PETAL_COLORS.length]
        : LEAF_COLORS[i % LEAF_COLORS.length];
      const size = 16 + (i % 4) * 6; // sizes between 16px and 34px
      const left = (i * 19) % 100; // Spreads them evenly across viewport
      const duration = 12 + (i % 5) * 2; // slow fall 12-20s
      const delay = -((i * 11) % 24); // negative delay to start immediately mid-air
      const drift = `${((i % 5) - 2) * 45}px`;
      const spin = `${(i % 2 === 0 ? 1 : -1) * (180 + (i % 3) * 90)}deg`;
      const blur = i % 5 === 0 ? 1 : 0; // slight camera depth of field

      return { id: i, type, color, size, left, duration, delay, drift, spin, blur };
    });
  }, []);

  // Background watercolor zoom animation variants
  const bgVariants = {
    hidden: { scale: shouldReduceMotion ? 1 : 1.05, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 2.8, ease: [0.25, 1, 0.5, 1] }
    }
  };

  // Corner illustrations reveal
  const cornerVariants = {
    hidden: (deg: number) => ({
      opacity: 0,
      scale: shouldReduceMotion ? 1 : 0.85,
      rotate: shouldReduceMotion ? 0 : deg - 10,
    }),
    visible: {
      opacity: 0.85,
      scale: 1,
      rotate: 0,
      transition: { duration: 2.0, ease: "easeOut", delay: 0.2 }
    }
  };

  // Standard Fade-Up Variants
  const fadeUpVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 15 },
    visible: (delay: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 1.2, ease: "easeOut", delay }
    })
  };

  // Cursive Handwriting / Mask Reveal Variants
  const nameRevealVariants = {
    hidden: {
      opacity: 0,
      filter: "blur(4px)",
      clipPath: shouldReduceMotion ? "inset(0% 0% 0% 0%)" : "inset(0% 100% 0% 0%)"
    },
    visible: (delay: number) => ({
      opacity: 1,
      filter: "blur(0px)",
      clipPath: "inset(0% 0% 0% 0%)",
      transition: {
        clipPath: { duration: 2.2, ease: [0.25, 1, 0.3, 1], delay },
        opacity: { duration: 1.4, ease: "easeOut", delay },
        filter: { duration: 1.6, ease: "easeOut", delay }
      }
    })
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex flex-col items-center justify-center py-24 px-6 overflow-hidden bg-[#FAF6EE]"
    >
      {/* ─── PROCEDURAL WATERCOLOR BACKGROUND ─── */}
      <motion.div
        variants={bgVariants}
        initial="hidden"
        animate={visible ? "visible" : "hidden"}
        className="absolute inset-0 w-full h-full pointer-events-none z-[1]"
      >
        {/* Soft blush watercolor stain top-left */}
        <div className="absolute -top-[10%] -left-[10%] w-[60vw] h-[60vw] rounded-full bg-[#FCEBEB] blur-[90px] opacity-60" />
        
        {/* Soft sage watercolor stain right-center */}
        <div className="absolute top-[25%] -right-[15%] w-[65vw] h-[65vw] rounded-full bg-[#EBF0E6] blur-[100px] opacity-55" />
        
        {/* Creamy gold watercolor stain bottom-left */}
        <div className="absolute -bottom-[10%] -left-[5%] w-[55vw] h-[55vw] rounded-full bg-[#F7EAD0] blur-[80px] opacity-45" />

        {/* Paper texture grain overlay */}
        <div 
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: "radial-gradient(#4a3f2f 1px, transparent 1px)",
            backgroundSize: "20px 20px"
          }}
        />
      </motion.div>

      {/* ─── FLOATING SAKURA PETALS & LEAVES ─── */}
      {visible && !shouldReduceMotion && (
        <div className="absolute inset-0 pointer-events-none z-[2] overflow-hidden">
          {particles.map((p) => (
            <div
              key={p.id}
              className="absolute top-0 select-none will-change-transform"
              style={{
                left: `${p.left}vw`,
                filter: p.blur > 0 ? `blur(${p.blur}px)` : undefined,
                animation: `fall ${p.duration}s linear ${p.delay}s infinite`,
                ["--drift" as any]: p.drift,
                ["--spin" as any]: p.spin,
                ["--op" as any]: 0.85,
              }}
            >
              {p.type === "petal" ? (
                <SakuraPetal size={p.size} color={p.color} />
              ) : (
                <SageLeaf size={p.size} color={p.color} />
              )}
            </div>
          ))}
        </div>
      )}

      {/* ─── BOTANICAL CORNER ILLUSTRATIONS ─── */}
      <div className="absolute inset-0 pointer-events-none z-[3] overflow-hidden">
        {/* Top-Left Corner */}
        <motion.div
          custom={0}
          variants={cornerVariants}
          initial="hidden"
          animate={visible ? "visible" : "hidden"}
          className="absolute -top-6 -left-6 w-[20vw] min-w-[120px] max-w-[200px]"
        >
          <CornerBotanical style={{ transform: "rotate(0deg)" }} />
        </motion.div>

        {/* Top-Right Corner */}
        <motion.div
          custom={-90}
          variants={cornerVariants}
          initial="hidden"
          animate={visible ? "visible" : "hidden"}
          className="absolute -top-6 -right-6 w-[20vw] min-w-[120px] max-w-[200px]"
        >
          <CornerBotanical style={{ transform: "scaleX(-1) rotate(0deg)" }} />
        </motion.div>

        {/* Bottom-Left Corner */}
        <motion.div
          custom={90}
          variants={cornerVariants}
          initial="hidden"
          animate={visible ? "visible" : "hidden"}
          className="absolute -bottom-6 -left-6 w-[20vw] min-w-[120px] max-w-[200px]"
        >
          <CornerBotanical style={{ transform: "scaleY(-1) rotate(0deg)" }} />
        </motion.div>

        {/* Bottom-Right Corner */}
        <motion.div
          custom={180}
          variants={cornerVariants}
          initial="hidden"
          animate={visible ? "visible" : "hidden"}
          className="absolute -bottom-6 -right-6 w-[20vw] min-w-[120px] max-w-[200px]"
        >
          <CornerBotanical style={{ transform: "scale(-1) rotate(0deg)" }} />
        </motion.div>
      </div>

      {/* ─── MAIN WEDDING CARD HERO CONTENT ─── */}
      <div className="relative z-[4] w-full max-w-[620px] mx-auto flex flex-col items-center text-center">
        {/* 1. Ganesha Gold Icon (Reveals first) */}
        <motion.div
          variants={fadeUpVariants}
          custom={0.3}
          initial="hidden"
          animate={visible ? "visible" : "hidden"}
          className="mb-3"
        >
          <GaneshGoldIcon />
        </motion.div>

        {/* 2. Ganeshaya Namah Shloka */}
        <motion.p
          variants={fadeUpVariants}
          custom={0.8}
          initial="hidden"
          animate={visible ? "visible" : "hidden"}
          className="mt-2 tracking-[0.1em]"
          style={{
            fontFamily: "var(--font-great-vibes), 'Great Vibes', cursive",
            fontSize: "clamp(16px, 3.5vw, 22px)",
            color: "#c4873a",
            textShadow: "0 1px 2px rgba(255,255,255,0.4)"
          }}
        >
          ॥ Shree Ganeshaya Namah ॥
        </motion.p>

        {/* 3. Invitation Shloka / Intro Text */}
        <motion.p
          variants={fadeUpVariants}
          custom={1.4}
          initial="hidden"
          animate={visible ? "visible" : "hidden"}
          className="mt-6 mb-8 leading-relaxed max-w-[440px] px-4 font-light text-accent-500"
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "clamp(15px, 3.5vw, 19px)",
            letterSpacing: "0.02em"
          }}
        >
          We cordially invite you to witness the beginning of our forever and celebrate the wedding ceremony of
        </motion.p>

        {/* 4. Groom Name (Ink/clipPath Reveal) */}
        <motion.h1
          variants={nameRevealVariants}
          custom={2.1}
          initial="hidden"
          animate={visible ? "visible" : "hidden"}
          className="text-primary-700 tracking-normal select-none"
          style={{
            fontFamily: "var(--font-great-vibes), 'Great Vibes', cursive",
            fontSize: "clamp(46px, 11vw, 76px)",
            lineHeight: 1.05,
            textShadow: "0 1px 2px rgba(212,165,165,0.15)"
          }}
        >
          {names[0]}
        </motion.h1>

        {/* 5. Groom Parent Names */}
        <motion.div
          variants={fadeUpVariants}
          custom={2.9}
          initial="hidden"
          animate={visible ? "visible" : "hidden"}
          className="mt-2 mb-5"
        >
          <p
            className="whitespace-pre-line"
            style={{
              fontFamily: "var(--font-poppins), Poppins, sans-serif",
              fontSize: "clamp(11px, 2.6vw, 13px)",
              color: "#7a8a6c",
              letterSpacing: "0.08em",
              fontWeight: 400,
              lineHeight: 1.6
            }}
          >
            {isRushikesh ? "S/o Mr. Sanjay Deshmukh\n& Mrs. Seema Deshmukh" : "Son of Mr. & Mrs. Mistry"}
          </p>
        </motion.div>

        {/* 6. "with" Connector Text */}
        <motion.p
          variants={fadeUpVariants}
          custom={3.5}
          initial="hidden"
          animate={visible ? "visible" : "hidden"}
          className="my-3 font-light text-gold-700 italic"
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "clamp(22px, 5vw, 32px)",
          }}
        >
          with
        </motion.p>

        {/* 7. Bride Name (Ink/clipPath Reveal) */}
        <motion.h1
          variants={nameRevealVariants}
          custom={4.1}
          initial="hidden"
          animate={visible ? "visible" : "hidden"}
          className="text-primary-700 tracking-normal select-none"
          style={{
            fontFamily: "var(--font-great-vibes), 'Great Vibes', cursive",
            fontSize: "clamp(46px, 11vw, 76px)",
            lineHeight: 1.05,
            textShadow: "0 1px 2px rgba(212,165,165,0.15)"
          }}
        >
          {names[1]}
        </motion.h1>

        {/* 8. Bride Parent Names */}
        <motion.div
          variants={fadeUpVariants}
          custom={4.9}
          initial="hidden"
          animate={visible ? "visible" : "hidden"}
          className="mt-2 mb-8"
        >
          <p
            className="whitespace-pre-line"
            style={{
              fontFamily: "var(--font-poppins), Poppins, sans-serif",
              fontSize: "clamp(11px, 2.6vw, 13px)",
              color: "#7a8a6c",
              letterSpacing: "0.08em",
              fontWeight: 400,
              lineHeight: 1.6
            }}
          >
            {isRushikesh ? "D/o Mr. Dasharath Yadav\n& Mrs. Ujjwala Yadav" : "Daughter of Mr. & Mrs. Family"}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
