'use client'

import { motion } from 'framer-motion'

export default function VenueMap() {
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

      <div className="max-w-5xl mx-auto relative z-20">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-4"
        >
          {/* Small label */}
          <p 
            className="text-sm md:text-base tracking-widest uppercase mb-2"
            style={{
              color: "#c4873a",
              letterSpacing: "0.08em",
              fontFamily: "var(--font-poppins), Poppins, sans-serif",
              fontWeight: 400
            }}
          >
            VENUE
          </p>

          {/* Main title */}
          <h2 
            className="text-5xl md:text-6xl font-cursive text-rose-deep mb-4"
            style={{
              fontFamily: "var(--font-great-vibes), 'Great Vibes', cursive"
            }}
          >
            Where We Celebrate
          </h2>

          {/* Venue address */}
          <a 
            href="https://www.google.com/maps/dir/?api=1&destination=The+St.+Regis+Mumbai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-base md:text-lg hover:underline transition-all block max-w-xl mx-auto"
            style={{
              color: "#7a8a6c",
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              letterSpacing: "0.02em"
            }}
          >
            The St. Regis Mumbai, 462, Senapati Bapat Marg, Lower Parel, Mumbai, Maharashtra 400013
          </a>
        </motion.div>

        {/* Map Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative rounded-3xl overflow-hidden shadow-elegant mb-6 max-w-3xl mx-auto"
          style={{
            height: "420px",
            border: "1px solid rgba(201, 169, 97, 0.4)"
          }}
        >
          {/* Google Map Iframe */}
          <iframe
            src="https://maps.google.com/maps?q=The%20St.%20Regis%20Mumbai&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>

        {/* Get Directions Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center"
        >
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=The+St.+Regis+Mumbai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-cinzel tracking-widest text-xs font-semibold shadow-soft hover:shadow-elegant transition-all text-center"
            style={{
              backgroundColor: "#b3924c",
              color: "#fff",
            }}
          >
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.41 11.59l-10-10a2 2 0 0 0-2.82 0l-10 10a2 2 0 0 0 0 2.82l10 10a2 2 0 0 0 2.82 0l10-10a2 2 0 0 0 0-2.82zm-10.41 5.41v-3h-4v-3h4v-3l4.5 4.5-4.5 4.5z" />
            </svg>
            Get Directions
          </a>
        </motion.div>
      </div>
    </section>
  )
}
