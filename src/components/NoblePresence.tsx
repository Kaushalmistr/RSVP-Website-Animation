'use client'

import { motion } from 'framer-motion'

export default function NoblePresence() {
  return (
    <section className="py-24 px-4 md:px-6 relative overflow-hidden" style={{ backgroundColor: "#FAF6EE" }}>
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

      <div className="max-w-4xl mx-auto relative z-20 flex flex-col items-center text-center">
        {/* Main Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-cursive text-rose-deep mb-8"
        >
          Awaiting Your Noble Presence
        </motion.h2>

        {/* Decorative divider */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-16 h-1 bg-gold-soft rounded-full mb-6"
        />

        {/* Subtitle text */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg md:text-xl font-serif-display italic text-accent-500 max-w-2xl"
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            letterSpacing: "0.02em"
          }}
        >
          Because meeting two souls require raise the fun — and you!
        </motion.p>
      </div>
    </section>
  )
}
