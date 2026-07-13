'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

interface FormData {
  name: string
  email: string
  phone: string
  guests: number
  dietaryRestrictions: string
  message: string
  attendance: 'yes' | 'no' | ''
}

export default function RSVP() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    guests: 1,
    dietaryRestrictions: '',
    message: '',
    attendance: '',
  })

  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true)
      setLoading(false)
      console.log('Form submitted:', formData)

      // Reset form after 3 seconds
      setTimeout(() => {
        setSubmitted(false)
        setFormData({
          name: '',
          email: '',
          phone: '',
          guests: 1,
          dietaryRestrictions: '',
          message: '',
          attendance: '',
        })
      }, 3000)
    }, 1000)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  }

  return (
    <section id="rsvp" className="section-spacing bg-gradient-to-b from-primary-50 to-white">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-display font-bold text-accent-500 mb-3">
            RSVP
          </h2>
          <div className="divider-accent mx-auto" />
          <p className="text-accent-500/70 font-light mt-6 max-w-2xl mx-auto">
            Please confirm your attendance by June 1st, 2026
          </p>
        </motion.div>

        {/* Form Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          {!submitted ? (
            <motion.form
              onSubmit={handleSubmit}
              className="bg-white rounded-xl border border-primary-200 p-8 md:p-12 shadow-sm"
            >
              <div className="space-y-6">
                {/* Full Name */}
                <motion.div variants={itemVariants}>
                  <label className="block text-sm font-semibold text-accent-500 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  />
                </motion.div>

                {/* Grid: Email and Phone */}
                <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-accent-500 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-accent-500 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXXXXXXX"
                      className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    />
                  </div>
                </motion.div>

                {/* Attendance */}
                <motion.div variants={itemVariants}>
                  <label className="block text-sm font-semibold text-accent-500 mb-2">
                    Will you be attending? *
                  </label>
                  <div className="flex gap-4">
                    {['yes', 'no'].map((option) => (
                      <label key={option} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="attendance"
                          value={option}
                          checked={formData.attendance === option}
                          onChange={handleChange}
                          required
                          className="w-4 h-4 accent-primary-500"
                        />
                        <span className="text-accent-500 font-medium capitalize">{option}</span>
                      </label>
                    ))}
                  </div>
                </motion.div>

                {/* Number of Guests */}
                <motion.div variants={itemVariants}>
                  <label className="block text-sm font-semibold text-accent-500 mb-2">
                    Number of Guests
                  </label>
                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all bg-white"
                  >
                    {[1, 2, 3, 4, 5].map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? 'Guest' : 'Guests'}
                      </option>
                    ))}
                  </select>
                </motion.div>

                {/* Dietary Restrictions */}
                <motion.div variants={itemVariants}>
                  <label className="block text-sm font-semibold text-accent-500 mb-2">
                    Dietary Restrictions
                  </label>
                  <input
                    type="text"
                    name="dietaryRestrictions"
                    value={formData.dietaryRestrictions}
                    onChange={handleChange}
                    placeholder="e.g., Vegetarian, Vegan, Gluten-free"
                    className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  />
                </motion.div>

                {/* Message */}
                <motion.div variants={itemVariants}>
                  <label className="block text-sm font-semibold text-accent-500 mb-2">
                    Special Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Share a message, blessing, or well-wishes..."
                    rows={4}
                    className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                  />
                </motion.div>

                {/* Submit Button */}
                <motion.div variants={itemVariants}>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full btn-primary disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {loading ? 'Submitting...' : 'Submit RSVP'}
                  </button>
                </motion.div>
              </div>
            </motion.form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-xl border-2 border-primary-500 p-8 md:p-12 text-center"
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 0.6, repeat: 3 }}
                className="text-6xl mb-4"
              >
                ✓
              </motion.div>
              <h3 className="text-3xl text-display font-bold text-primary-500 mb-3">
                Thank You!
              </h3>
              <p className="text-accent-500/70 font-light">
                We've received your RSVP. We can't wait to celebrate with you!
              </p>
            </motion.div>
          )}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto"
        >
          {[
            {
              title: 'Questions?',
              content: 'contact@kaushalsimran.com',
            },
            {
              title: 'Call Us',
              content: '+91 98765 43210',
            },
          ].map((item, index) => (
            <div
              key={item.title}
              className="bg-primary-50 rounded-lg p-6 text-center border border-primary-100"
            >
              <p className="text-sm font-semibold text-primary-500 uppercase tracking-widest mb-2">
                {item.title}
              </p>
              <p className="text-accent-500 font-medium">{item.content}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
