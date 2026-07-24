import React, { forwardRef } from "react";

interface EnvelopeProps {
  names: string[];
  date: string;
  onOpen: () => void;
  refs: {
    flap: React.RefObject<HTMLDivElement>;
    seal: React.RefObject<HTMLDivElement>;
    letter: React.RefObject<HTMLDivElement>;
  };
}

/* ── Detailed realistic white floral SVG pattern ── */
const FloralPattern = ({ className = "", style = {} }: { className?: string; style?: React.CSSProperties }) => (
  <svg
    className={className}
    style={style}
    viewBox="0 0 500 350"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      {/* Soft blur for depth */}
      <filter id="softGlow">
        <feGaussianBlur stdDeviation="0.5" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>

    {/* ====== LARGE CENTER ROSE ====== */}
    <g opacity="0.92" filter="url(#softGlow)">
      {/* Outermost petals */}
      <ellipse cx="250" cy="110" rx="38" ry="22" transform="rotate(-15 250 110)" fill="rgba(255,255,255,0.55)" />
      <ellipse cx="250" cy="110" rx="38" ry="22" transform="rotate(15 250 110)" fill="rgba(255,255,255,0.55)" />
      <ellipse cx="250" cy="110" rx="22" ry="38" transform="rotate(10 250 110)" fill="rgba(255,255,255,0.5)" />
      <ellipse cx="250" cy="110" rx="22" ry="38" transform="rotate(-10 250 110)" fill="rgba(255,255,255,0.5)" />
      {/* Middle layer petals */}
      <ellipse cx="235" cy="98" rx="20" ry="14" transform="rotate(-35 235 98)" fill="rgba(255,255,255,0.65)" />
      <ellipse cx="265" cy="98" rx="20" ry="14" transform="rotate(35 265 98)" fill="rgba(255,255,255,0.65)" />
      <ellipse cx="235" cy="122" rx="20" ry="14" transform="rotate(25 235 122)" fill="rgba(255,255,255,0.62)" />
      <ellipse cx="265" cy="122" rx="20" ry="14" transform="rotate(-25 265 122)" fill="rgba(255,255,255,0.62)" />
      <ellipse cx="250" cy="88" rx="18" ry="13" fill="rgba(255,255,255,0.63)" />
      <ellipse cx="250" cy="132" rx="18" ry="13" fill="rgba(255,255,255,0.6)" />
      {/* Inner petals — tighter spiral */}
      <ellipse cx="244" cy="104" rx="14" ry="10" transform="rotate(-45 244 104)" fill="rgba(255,255,255,0.72)" />
      <ellipse cx="256" cy="104" rx="14" ry="10" transform="rotate(45 256 104)" fill="rgba(255,255,255,0.72)" />
      <ellipse cx="244" cy="116" rx="14" ry="10" transform="rotate(30 244 116)" fill="rgba(255,255,255,0.7)" />
      <ellipse cx="256" cy="116" rx="14" ry="10" transform="rotate(-30 256 116)" fill="rgba(255,255,255,0.7)" />
      {/* Center bud */}
      <circle cx="250" cy="110" r="10" fill="rgba(255,255,255,0.78)" />
      <circle cx="250" cy="110" r="6" fill="rgba(255,255,255,0.6)" />
      {/* Spiral detail */}
      <path d="M247 110 Q250 105 253 110 Q250 115 247 110" stroke="rgba(255,255,255,0.4)" strokeWidth="0.8" fill="none" />
    </g>

    {/* ====== LEFT ROSE CLUSTER ====== */}
    <g opacity="0.88">
      {/* Large left rose */}
      <ellipse cx="120" cy="85" rx="30" ry="18" transform="rotate(-20 120 85)" fill="rgba(255,255,255,0.52)" />
      <ellipse cx="120" cy="85" rx="30" ry="18" transform="rotate(20 120 85)" fill="rgba(255,255,255,0.52)" />
      <ellipse cx="120" cy="85" rx="18" ry="30" transform="rotate(5 120 85)" fill="rgba(255,255,255,0.48)" />
      <ellipse cx="108" cy="76" rx="16" ry="11" transform="rotate(-40 108 76)" fill="rgba(255,255,255,0.62)" />
      <ellipse cx="132" cy="76" rx="16" ry="11" transform="rotate(40 132 76)" fill="rgba(255,255,255,0.62)" />
      <ellipse cx="108" cy="94" rx="15" ry="10" transform="rotate(30 108 94)" fill="rgba(255,255,255,0.6)" />
      <ellipse cx="132" cy="94" rx="15" ry="10" transform="rotate(-30 132 94)" fill="rgba(255,255,255,0.6)" />
      <ellipse cx="115" cy="80" rx="11" ry="8" transform="rotate(-50 115 80)" fill="rgba(255,255,255,0.7)" />
      <ellipse cx="125" cy="80" rx="11" ry="8" transform="rotate(50 125 80)" fill="rgba(255,255,255,0.7)" />
      <circle cx="120" cy="85" r="8" fill="rgba(255,255,255,0.75)" />
      <circle cx="120" cy="85" r="5" fill="rgba(255,255,255,0.55)" />
      <path d="M118 85 Q120 81 122 85 Q120 89 118 85" stroke="rgba(255,255,255,0.35)" strokeWidth="0.7" fill="none" />
    </g>

    {/* ====== RIGHT ROSE CLUSTER ====== */}
    <g opacity="0.88">
      <ellipse cx="380" cy="85" rx="30" ry="18" transform="rotate(-20 380 85)" fill="rgba(255,255,255,0.52)" />
      <ellipse cx="380" cy="85" rx="30" ry="18" transform="rotate(20 380 85)" fill="rgba(255,255,255,0.52)" />
      <ellipse cx="380" cy="85" rx="18" ry="30" transform="rotate(-5 380 85)" fill="rgba(255,255,255,0.48)" />
      <ellipse cx="368" cy="76" rx="16" ry="11" transform="rotate(-40 368 76)" fill="rgba(255,255,255,0.62)" />
      <ellipse cx="392" cy="76" rx="16" ry="11" transform="rotate(40 392 76)" fill="rgba(255,255,255,0.62)" />
      <ellipse cx="368" cy="94" rx="15" ry="10" transform="rotate(30 368 94)" fill="rgba(255,255,255,0.6)" />
      <ellipse cx="392" cy="94" rx="15" ry="10" transform="rotate(-30 392 94)" fill="rgba(255,255,255,0.6)" />
      <ellipse cx="375" cy="80" rx="11" ry="8" transform="rotate(-50 375 80)" fill="rgba(255,255,255,0.7)" />
      <ellipse cx="385" cy="80" rx="11" ry="8" transform="rotate(50 385 80)" fill="rgba(255,255,255,0.7)" />
      <circle cx="380" cy="85" r="8" fill="rgba(255,255,255,0.75)" />
      <circle cx="380" cy="85" r="5" fill="rgba(255,255,255,0.55)" />
    </g>

    {/* ====== MEDIUM ROSES — upper-left and upper-right ====== */}
    {/* Upper-left medium rose */}
    <g opacity="0.78">
      <ellipse cx="72" cy="55" rx="22" ry="14" transform="rotate(-25 72 55)" fill="rgba(255,255,255,0.5)" />
      <ellipse cx="72" cy="55" rx="22" ry="14" transform="rotate(25 72 55)" fill="rgba(255,255,255,0.5)" />
      <ellipse cx="65" cy="49" rx="13" ry="9" transform="rotate(-45 65 49)" fill="rgba(255,255,255,0.6)" />
      <ellipse cx="79" cy="49" rx="13" ry="9" transform="rotate(45 79 49)" fill="rgba(255,255,255,0.6)" />
      <ellipse cx="65" cy="61" rx="12" ry="8" transform="rotate(35 65 61)" fill="rgba(255,255,255,0.58)" />
      <ellipse cx="79" cy="61" rx="12" ry="8" transform="rotate(-35 79 61)" fill="rgba(255,255,255,0.58)" />
      <circle cx="72" cy="55" r="7" fill="rgba(255,255,255,0.7)" />
      <circle cx="72" cy="55" r="4" fill="rgba(255,255,255,0.5)" />
    </g>
    {/* Upper-right medium rose */}
    <g opacity="0.78">
      <ellipse cx="428" cy="55" rx="22" ry="14" transform="rotate(-25 428 55)" fill="rgba(255,255,255,0.5)" />
      <ellipse cx="428" cy="55" rx="22" ry="14" transform="rotate(25 428 55)" fill="rgba(255,255,255,0.5)" />
      <ellipse cx="421" cy="49" rx="13" ry="9" transform="rotate(-45 421 49)" fill="rgba(255,255,255,0.6)" />
      <ellipse cx="435" cy="49" rx="13" ry="9" transform="rotate(45 435 49)" fill="rgba(255,255,255,0.6)" />
      <ellipse cx="421" cy="61" rx="12" ry="8" transform="rotate(35 421 61)" fill="rgba(255,255,255,0.58)" />
      <ellipse cx="435" cy="61" rx="12" ry="8" transform="rotate(-35 435 61)" fill="rgba(255,255,255,0.58)" />
      <circle cx="428" cy="55" r="7" fill="rgba(255,255,255,0.7)" />
      <circle cx="428" cy="55" r="4" fill="rgba(255,255,255,0.5)" />
    </g>

    {/* ====== SMALL ROSES — between large clusters ====== */}
    {/* Left-center small rose */}
    <g opacity="0.75">
      <ellipse cx="175" cy="62" rx="16" ry="10" transform="rotate(-20 175 62)" fill="rgba(255,255,255,0.48)" />
      <ellipse cx="175" cy="62" rx="16" ry="10" transform="rotate(20 175 62)" fill="rgba(255,255,255,0.48)" />
      <ellipse cx="170" cy="57" rx="10" ry="7" transform="rotate(-40 170 57)" fill="rgba(255,255,255,0.58)" />
      <ellipse cx="180" cy="57" rx="10" ry="7" transform="rotate(40 180 57)" fill="rgba(255,255,255,0.58)" />
      <circle cx="175" cy="62" r="6" fill="rgba(255,255,255,0.65)" />
      <circle cx="175" cy="62" r="3.5" fill="rgba(255,255,255,0.45)" />
    </g>
    {/* Right-center small rose */}
    <g opacity="0.75">
      <ellipse cx="325" cy="62" rx="16" ry="10" transform="rotate(-20 325 62)" fill="rgba(255,255,255,0.48)" />
      <ellipse cx="325" cy="62" rx="16" ry="10" transform="rotate(20 325 62)" fill="rgba(255,255,255,0.48)" />
      <ellipse cx="320" cy="57" rx="10" ry="7" transform="rotate(-40 320 57)" fill="rgba(255,255,255,0.58)" />
      <ellipse cx="330" cy="57" rx="10" ry="7" transform="rotate(40 330 57)" fill="rgba(255,255,255,0.58)" />
      <circle cx="325" cy="62" r="6" fill="rgba(255,255,255,0.65)" />
      <circle cx="325" cy="62" r="3.5" fill="rgba(255,255,255,0.45)" />
    </g>

    {/* ====== SMALL BUDS (rosebuds) ====== */}
    <g opacity="0.65">
      <ellipse cx="50" cy="38" rx="8" ry="12" transform="rotate(-10 50 38)" fill="rgba(255,255,255,0.5)" />
      <ellipse cx="50" cy="35" rx="5" ry="7" fill="rgba(255,255,255,0.6)" />
      <ellipse cx="48" cy="33" rx="3" ry="5" transform="rotate(-15 48 33)" fill="rgba(255,255,255,0.7)" />
    </g>
    <g opacity="0.65">
      <ellipse cx="450" cy="38" rx="8" ry="12" transform="rotate(10 450 38)" fill="rgba(255,255,255,0.5)" />
      <ellipse cx="450" cy="35" rx="5" ry="7" fill="rgba(255,255,255,0.6)" />
      <ellipse cx="452" cy="33" rx="3" ry="5" transform="rotate(15 452 33)" fill="rgba(255,255,255,0.7)" />
    </g>
    <g opacity="0.6">
      <ellipse cx="200" cy="42" rx="7" ry="10" transform="rotate(-8 200 42)" fill="rgba(255,255,255,0.48)" />
      <ellipse cx="200" cy="40" rx="4" ry="6" fill="rgba(255,255,255,0.58)" />
    </g>
    <g opacity="0.6">
      <ellipse cx="300" cy="42" rx="7" ry="10" transform="rotate(8 300 42)" fill="rgba(255,255,255,0.48)" />
      <ellipse cx="300" cy="40" rx="4" ry="6" fill="rgba(255,255,255,0.58)" />
    </g>

    {/* ====== DETAILED LEAVES ====== */}
    {/* Left-side leaves */}
    <g opacity="0.7">
      <path d="M60 100 Q40 80 55 60" stroke="rgba(255,255,255,0.35)" strokeWidth="1" fill="none" />
      <ellipse cx="48" cy="78" rx="5" ry="16" transform="rotate(-30 48 78)" fill="rgba(255,255,255,0.38)" />
      <path d="M48 68 L48 88" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" fill="none" />
      <ellipse cx="58" cy="92" rx="5" ry="14" transform="rotate(-15 58 92)" fill="rgba(255,255,255,0.35)" />
      <path d="M58 82 L58 102" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" fill="none" />
    </g>
    <g opacity="0.65">
      <ellipse cx="90" cy="120" rx="6" ry="18" transform="rotate(-10 90 120)" fill="rgba(255,255,255,0.36)" />
      <path d="M90 106 L90 134" stroke="rgba(255,255,255,0.22)" strokeWidth="0.6" fill="none" />
      <ellipse cx="100" cy="115" rx="5" ry="15" transform="rotate(15 100 115)" fill="rgba(255,255,255,0.32)" />
      <path d="M100 103 L100 127" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" fill="none" />
    </g>
    {/* Right-side leaves */}
    <g opacity="0.7">
      <path d="M440 100 Q460 80 445 60" stroke="rgba(255,255,255,0.35)" strokeWidth="1" fill="none" />
      <ellipse cx="452" cy="78" rx="5" ry="16" transform="rotate(30 452 78)" fill="rgba(255,255,255,0.38)" />
      <path d="M452 68 L452 88" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" fill="none" />
      <ellipse cx="442" cy="92" rx="5" ry="14" transform="rotate(15 442 92)" fill="rgba(255,255,255,0.35)" />
      <path d="M442 82 L442 102" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" fill="none" />
    </g>
    <g opacity="0.65">
      <ellipse cx="410" cy="120" rx="6" ry="18" transform="rotate(10 410 120)" fill="rgba(255,255,255,0.36)" />
      <path d="M410 106 L410 134" stroke="rgba(255,255,255,0.22)" strokeWidth="0.6" fill="none" />
      <ellipse cx="400" cy="115" rx="5" ry="15" transform="rotate(-15 400 115)" fill="rgba(255,255,255,0.32)" />
      <path d="M400 103 L400 127" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" fill="none" />
    </g>

    {/* Center bottom leaves */}
    <g opacity="0.6">
      <ellipse cx="220" cy="150" rx="6" ry="20" transform="rotate(-20 220 150)" fill="rgba(255,255,255,0.34)" />
      <path d="M220 135 L220 165" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" fill="none" />
      <ellipse cx="280" cy="150" rx="6" ry="20" transform="rotate(20 280 150)" fill="rgba(255,255,255,0.34)" />
      <path d="M280 135 L280 165" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" fill="none" />
      <ellipse cx="250" cy="155" rx="5" ry="16" fill="rgba(255,255,255,0.3)" />
      <path d="M250 143 L250 167" stroke="rgba(255,255,255,0.18)" strokeWidth="0.5" fill="none" />
    </g>

    {/* ====== VINE BRANCHES & CURLS ====== */}
    {/* Left vine network */}
    <path d="M40 130 Q65 115 95 125 Q110 130 125 120 Q140 110 160 120"
      stroke="rgba(255,255,255,0.32)" strokeWidth="1.2" fill="none" />
    <path d="M55 125 Q70 110 80 115"
      stroke="rgba(255,255,255,0.25)" strokeWidth="0.8" fill="none" />
    <path d="M110 118 Q120 105 135 110"
      stroke="rgba(255,255,255,0.25)" strokeWidth="0.8" fill="none" />

    {/* Right vine network */}
    <path d="M460 130 Q435 115 405 125 Q390 130 375 120 Q360 110 340 120"
      stroke="rgba(255,255,255,0.32)" strokeWidth="1.2" fill="none" />
    <path d="M445 125 Q430 110 420 115"
      stroke="rgba(255,255,255,0.25)" strokeWidth="0.8" fill="none" />
    <path d="M390 118 Q380 105 365 110"
      stroke="rgba(255,255,255,0.25)" strokeWidth="0.8" fill="none" />

    {/* Center vine connecting roses */}
    <path d="M165 125 Q190 140 215 130 Q235 122 250 135 Q265 122 285 130 Q310 140 335 125"
      stroke="rgba(255,255,255,0.28)" strokeWidth="1" fill="none" />

    {/* ====== TINY DETAIL DOTS (stamens/pollen) ====== */}
    <circle cx="145" cy="95" r="2.5" fill="rgba(255,255,255,0.45)" />
    <circle cx="355" cy="95" r="2.5" fill="rgba(255,255,255,0.45)" />
    <circle cx="195" cy="78" r="2" fill="rgba(255,255,255,0.4)" />
    <circle cx="305" cy="78" r="2" fill="rgba(255,255,255,0.4)" />
    <circle cx="155" cy="75" r="1.8" fill="rgba(255,255,255,0.35)" />
    <circle cx="345" cy="75" r="1.8" fill="rgba(255,255,255,0.35)" />
    <circle cx="100" cy="55" r="2" fill="rgba(255,255,255,0.38)" />
    <circle cx="400" cy="55" r="2" fill="rgba(255,255,255,0.38)" />
    <circle cx="215" cy="95" r="1.5" fill="rgba(255,255,255,0.32)" />
    <circle cx="285" cy="95" r="1.5" fill="rgba(255,255,255,0.32)" />
    <circle cx="135" cy="135" r="1.5" fill="rgba(255,255,255,0.3)" />
    <circle cx="365" cy="135" r="1.5" fill="rgba(255,255,255,0.3)" />

    {/* ====== ADDITIONAL SMALL FLOWER CLUSTERS ====== */}
    {/* Bottom-left cluster */}
    <g opacity="0.55">
      <ellipse cx="148" cy="140" rx="10" ry="7" transform="rotate(-25 148 140)" fill="rgba(255,255,255,0.45)" />
      <ellipse cx="148" cy="140" rx="10" ry="7" transform="rotate(25 148 140)" fill="rgba(255,255,255,0.45)" />
      <circle cx="148" cy="140" r="5" fill="rgba(255,255,255,0.55)" />
      <circle cx="148" cy="140" r="3" fill="rgba(255,255,255,0.4)" />
    </g>
    {/* Bottom-right cluster */}
    <g opacity="0.55">
      <ellipse cx="352" cy="140" rx="10" ry="7" transform="rotate(-25 352 140)" fill="rgba(255,255,255,0.45)" />
      <ellipse cx="352" cy="140" rx="10" ry="7" transform="rotate(25 352 140)" fill="rgba(255,255,255,0.45)" />
      <circle cx="352" cy="140" r="5" fill="rgba(255,255,255,0.55)" />
      <circle cx="352" cy="140" r="3" fill="rgba(255,255,255,0.4)" />
    </g>

    {/* ====== DECORATIVE LEAF SPRIGS ====== */}
    {/* Tiny leaf pairs along vines */}
    <ellipse cx="75" cy="122" rx="3" ry="8" transform="rotate(-30 75 122)" fill="rgba(255,255,255,0.3)" />
    <ellipse cx="80" cy="125" rx="3" ry="8" transform="rotate(20 80 125)" fill="rgba(255,255,255,0.28)" />
    <ellipse cx="425" cy="122" rx="3" ry="8" transform="rotate(30 425 122)" fill="rgba(255,255,255,0.3)" />
    <ellipse cx="420" cy="125" rx="3" ry="8" transform="rotate(-20 420 125)" fill="rgba(255,255,255,0.28)" />
    <ellipse cx="190" cy="132" rx="3" ry="7" transform="rotate(-15 190 132)" fill="rgba(255,255,255,0.25)" />
    <ellipse cx="310" cy="132" rx="3" ry="7" transform="rotate(15 310 132)" fill="rgba(255,255,255,0.25)" />
  </svg>
);

const Envelope = forwardRef<HTMLButtonElement, EnvelopeProps>(function Envelope(
  { names, date, onOpen, refs },
  _ref
) {
  return (
    <div
      className="fixed inset-0 z-[5] flex items-center justify-center"
      style={{ perspective: 1400 }}
    >
      <button
        onClick={onOpen}
        className="relative outline-none cursor-pointer"
        style={{
          width: "min(82vw, 380px)",
          aspectRatio: "0.88 / 1",
          animation: "breathe 3s ease-in-out infinite",
        }}
      >
        {/* ── drop shadow ── */}
        <div
          className="absolute inset-0 rounded-[6px]"
          style={{
            boxShadow:
              "0 30px 60px -10px rgba(0,0,0,0.35), 0 18px 36px -18px rgba(0,0,0,0.25)",
          }}
        />

        {/* ── LETTER (hidden behind, rises on open) ── */}
        <div
          ref={refs.letter}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] h-[110%] rounded-[4px] flex flex-col items-center justify-center px-6 text-center"
          style={{
            zIndex: 1,
            transform: "translate(-50%,-50%)",
            background: "linear-gradient(175deg, #fffef9 0%, #faf6ee 100%)",
            boxShadow: "0 2px 20px rgba(0,0,0,0.12)",
          }}
        >
          <p
            className="tracking-[0.3em] text-[10px] uppercase mb-3"
            style={{
              fontFamily: "var(--font-poppins), Poppins, sans-serif",
              color: "#8a7a5a",
            }}
          >
            Together with their families
          </p>
          <h1
            style={{
              fontFamily: "var(--font-playfair), 'Playfair Display', serif",
              fontSize: "clamp(26px, 7vw, 42px)",
              lineHeight: 1.1,
              color: "#4a3f2f",
            }}
          >
            {names[0]}
          </h1>
          <span
            className="italic my-1"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(18px, 4vw, 26px)",
              color: "#9c8a60",
            }}
          >
            &amp;
          </span>
          <h1
            style={{
              fontFamily: "var(--font-playfair), 'Playfair Display', serif",
              fontSize: "clamp(26px, 7vw, 42px)",
              lineHeight: 1.1,
              color: "#4a3f2f",
            }}
          >
            {names[1]}
          </h1>
          <p
            className="mt-4 tracking-[0.2em] text-xs"
            style={{
              fontFamily: "var(--font-poppins), Poppins, sans-serif",
              color: "#8a7a5a",
            }}
          >
            {date}
          </p>
        </div>

        {/* ── ENVELOPE BODY (back panel — sage green) ── */}
        <div
          className="absolute inset-0 rounded-[6px]"
          style={{
            zIndex: 2,
            background: "linear-gradient(175deg, #8a9a7a 0%, #7a8e6c 50%, #6d8160 100%)",
          }}
        />

        {/* ── ENVELOPE FRONT POCKET (V-shaped bottom) ── */}
        <div
          className="absolute inset-0 rounded-[6px] overflow-hidden"
          style={{
            zIndex: 3,
            background: "linear-gradient(175deg, #8fa07e 0%, #7d9170 100%)",
            clipPath: "polygon(0 42%, 50% 100%, 100% 42%, 100% 100%, 0 100%)",
            boxShadow: "inset 0 2px 12px rgba(0,0,0,0.08)",
          }}
        />

        {/* ── Floral pattern on the FLAP ── */}
        <div
          ref={refs.flap}
          className="absolute inset-x-0 top-0 origin-top"
          style={{
            height: "58%",
            zIndex: 4,
            background: "linear-gradient(175deg, #8a9c78 0%, #7b8f6a 100%)",
            clipPath: "polygon(0 0, 100% 0, 50% 100%)",
            transformStyle: "preserve-3d",
            backfaceVisibility: "hidden",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          }}
        >
          <FloralPattern
            style={{
              position: "absolute",
              top: "0%",
              left: "5%",
              width: "90%",
              height: "88%",
              pointerEvents: "none",
            }}
          />
        </div>

        {/* ── Floral pattern on the BODY (visible above the pocket) ── */}
        <div
          className="absolute inset-x-0 top-0 pointer-events-none"
          style={{
            height: "50%",
            zIndex: 2,
          }}
        >
          <FloralPattern
            style={{
              position: "absolute",
              bottom: "-10%",
              left: "5%",
              width: "90%",
              height: "80%",
              opacity: 0.5,
              transform: "scaleY(-1)",
            }}
          />
        </div>

        {/* ── WAX SEAL ── */}
        <div
          ref={refs.seal}
          className="absolute left-1/2 top-[47%] -translate-x-1/2 -translate-y-1/2 rounded-full grid place-items-center"
          style={{
            zIndex: 6,
            width: "clamp(52px, 16%, 72px)",
            aspectRatio: "1",
            background:
              "radial-gradient(circle at 38% 32%, #e8c95e 0%, #d4a73a 50%, #b8902f 100%)",
            boxShadow:
              "0 0 14px 2px rgba(212, 175, 55, 0.45), 0 6px 14px rgba(0,0,0,0.25), inset 0 1px 2px rgba(255,255,255,0.3)",
            animation: "sealGlow 2.4s ease-in-out infinite",
          }}
        >
          {/* Ring detail */}
          <div
            className="absolute inset-[3px] rounded-full"
            style={{
              border: "1.5px solid rgba(255,255,255,0.25)",
            }}
          />
          <span
            className="font-bold"
            style={{
              fontFamily: "var(--font-playfair), 'Playfair Display', serif",
              fontSize: "clamp(12px, 3.5vw, 17px)",
              color: "#5a3e0e",
              textShadow: "0 1px 1px rgba(255,255,255,0.2)",
              letterSpacing: "0.05em",
            }}
          >
            K&S
          </span>
        </div>
      </button>
    </div>
  );
});

export default Envelope;