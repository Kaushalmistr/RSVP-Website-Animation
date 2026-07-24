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
          <p 
            className="text-base md:text-lg"
            style={{
              color: "#7a8a6c",
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              letterSpacing: "0.02em"
            }}
          >
            Fuhal Garden, Zirappusali, Phaltan, Satara, Maharashtra
          </p>
        </motion.div>

        {/* Map Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative rounded-2xl overflow-hidden shadow-elegant mb-8"
          style={{
            height: "400px",
            border: "3px solid #c9a961"
          }}
        >
          {/* Google Map Iframe */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3733.8471234567890!2d74.7!3d18.16!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2a1234567890%3A0x1234567890abcdef!2sFuhal%20Garden%20Hall!5e0!3m2!1sen!2sin!4v1234567890123"
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
            href="https://maps.google.com/?q=Fuhal+Garden+Zirappusali+Phaltan+Satara"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 rounded-full font-cinzel tracking-widest text-sm font-semibold shadow-soft hover:shadow-elegant transition-all text-center"
            style={{
              backgroundColor: "#c9a961",
              color: "#fff",
            }}
          >
            Get Directions
          </a>
        </motion.div>
      </div>
    </section>
  )
}
