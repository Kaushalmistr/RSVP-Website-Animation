'use client'

import { motion } from 'framer-motion'

export default function TheFamilies() {
  const families = [
    {
      label: "GROOM'S SIDE",
      members: [
        "Mr. Sanjay Deshmukh",
        "Mrs. Seema Deshmukh"
      ]
    },
    {
      label: "BRIDE'S SIDE",
      members: [
        "Mr. Dasharath Yadav",
        "Mrs. Ujjwala Yadav"
      ]
    }
  ]

  return (
    <section className="py-24 px-4 md:px-6 relative overflow-hidden" style={{ backgroundColor: "hsl(95deg 12.71% 73.84%)" }}>
      {/* ─── PROCEDURAL WATERCOLOR BACKGROUND ─── */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-[0]">
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
      </div>

      {/* Decorative floating elements */}
      <motion.div
        className="absolute -top-20 -right-20 w-40 h-40 bg-gold-soft/20 rounded-full blur-3xl z-10"
        animate={{ y: [0, 40, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute -bottom-20 -left-20 w-40 h-40 bg-rose-deep/10 rounded-full blur-3xl z-10"
        animate={{ y: [40, 0, 40] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="max-w-4xl mx-auto relative z-20">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          {/* Small label above title */}
          <p 
            className="text-sm md:text-base tracking-widest uppercase mb-2"
            style={{
              color: "#a8888a",
              letterSpacing: "0.08em",
              fontFamily: "var(--font-poppins), Poppins, sans-serif",
              fontWeight: 400
            }}
          >
            WITH LOVE
          </p>

          {/* Main title */}
          <h2 
            className="text-5xl md:text-6xl font-cursive text-rose-deep mb-4"
            style={{
              fontFamily: "var(--font-great-vibes), 'Great Vibes', cursive"
            }}
          >
            The Families
          </h2>

          {/* Decorative divider */}
          <div className="w-16 h-1 bg-gold-soft rounded-full mx-auto mb-4" />

          {/* Subtitle */}
          <p 
            className="text-sm md:text-base tracking-widest uppercase"
            style={{
              color: "#a8888a",
              letterSpacing: "0.08em",
              fontFamily: "var(--font-poppins), Poppins, sans-serif",
              fontWeight: 400
            }}
          >
            AWAITING YOUR GRACIOUS PRESENCE
          </p>
        </motion.div>

        {/* Family Cards Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1,
              },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16"
        >
          {families.map((family, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.8, ease: "easeOut" }
                }
              }}
              className="relative flex flex-col items-center text-center p-8 rounded-lg"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.4)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.3)"
              }}
            >
              {/* Family side label */}
              <p 
                className="text-xs md:text-sm tracking-widest uppercase mb-6"
                style={{
                  color: "#a8888a",
                  letterSpacing: "0.08em",
                  fontFamily: "var(--font-poppins), Poppins, sans-serif",
                  fontWeight: 500
                }}
              >
                {family.label}
              </p>

              {/* Decorative divider */}
              <div className="w-12 h-px bg-gold-soft/50 mb-6" />

              {/* Family members */}
              <div className="space-y-2">
                {family.members.map((member, memberIdx) => (
                  <p
                    key={memberIdx}
                    style={{
                      fontFamily: "var(--font-poppins), Poppins, sans-serif",
                      fontSize: "clamp(14px, 2vw, 16px)",
                      color: "#7a8a6c",
                      fontWeight: 400,
                      letterSpacing: "0.02em"
                    }}
                  >
                    {member}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
