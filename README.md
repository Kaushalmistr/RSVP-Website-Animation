# Kaushal & Simran - Wedding Invitation Website

A modern, animated wedding invitation website built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

## 🎨 Design Features

- **Clean & Elegant Design** - White background with Blush Rose Gold (#D4A5A5) and Navy Blue (#1B3A5C) accents
- **Smooth Animations** - Scroll-triggered reveals, parallax effects, and micro-interactions powered by Framer Motion
- **Fully Responsive** - Mobile-first design that looks beautiful on all devices
- **Countdown Timer** - Live countdown to the wedding day with auto-updating seconds
- **Interactive Gallery** - Image lightbox with hover effects
- **Working RSVP Form** - Collect guest responses with validation
- **Accessibility** - Proper focus states, reduced motion support, semantic HTML

## 📁 Project Structure

```
wedding-invitation/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with metadata
│   │   ├── page.tsx            # Main homepage
│   │   └── globals.css         # Global styles & animations
│   └── components/
│       ├── Navigation.tsx       # Top navigation with mobile menu
│       ├── Hero.tsx            # Hero section with couple names
│       ├── CountdownTimer.tsx  # Live countdown to wedding
│       ├── Story.tsx           # Couple's journey timeline
│       ├── Events.tsx          # Wedding schedule & details
│       ├── Gallery.tsx         # Photo gallery with lightbox
│       ├── RSVP.tsx           # RSVP form with validation
│       └── Footer.tsx          # Footer with links & contacts
├── package.json
├── next.config.js
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
└── .gitignore
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone or download the project**
```bash
cd wedding-invitation
```

2. **Install dependencies**
```bash
npm install
```

3. **Run development server**
```bash
npm run dev
```

4. **Open in browser**
Navigate to `http://localhost:3000`

## 🔧 Customization Guide

### Change Couple Names & Details
Edit `/src/app/page.tsx` and component files:
- **Hero section**: `/src/components/Hero.tsx` - Update names, date, location
- **Events**: `/src/components/Events.tsx` - Update wedding schedule
- **Story**: `/src/components/Story.tsx` - Update couple's journey
- **Footer**: `/src/components/Footer.tsx` - Update contact info

### Update Wedding Date
In `/src/components/CountdownTimer.tsx`, line 24:
```typescript
const targetDate = new Date('2026-06-15').getTime() // Change to your date
```

### Customize Colors
Edit `/tailwind.config.js` in the `colors` section:
```javascript
colors: {
  primary: {
    500: '#D4A5A5', // Blush Rose Gold - change hex here
    ...
  },
  accent: {
    500: '#1B3A5C', // Navy Blue - change hex here
    ...
  },
}
```

### Add Real Photos to Gallery
In `/src/components/Gallery.tsx`:
1. Replace emoji placeholders with real images
2. Update the `galleryImages` array with image URLs
3. Implement actual image loading with Next.js `Image` component

### Modify RSVP Form
Edit `/src/components/RSVP.tsx` to:
- Add/remove form fields
- Change form validation
- Update email submission handler
- Connect to email service (Mailgun, SendGrid, etc.)

## 📦 Build & Deploy

### Build for Production
```bash
npm run build
npm start
```

### Deploy to Vercel (Recommended for Next.js)
```bash
npm install -g vercel
vercel
```

### Deploy to Other Platforms
- **Netlify**: Connect GitHub repo in dashboard
- **AWS Amplify**: `amplify publish`
- **Traditional Hosting**: Use the `/out` directory after `next build`

## 🎯 Key Components Breakdown

### Hero Section
- Animated couple names
- Call-to-action buttons
- Scroll indicator animation

### Countdown Timer
- Real-time countdown (updates every second)
- Grid layout with days, hours, minutes, seconds
- Auto-calculates based on your wedding date

### Story Section
- Timeline of couple's journey
- Parallax scrolling effect
- 4 milestone events (customize as needed)

### Events Section
- 3-day wedding schedule
- Color-coded event cards
- Travel & accommodation info cards

### Gallery
- 8-image grid (placeholder with emojis)
- Click to open lightbox
- Smooth animations on hover

### RSVP Form
- Name, email, phone inputs
- Attendance toggle (Yes/No)
- Guest count selector
- Dietary restrictions field
- Message textarea
- Success message after submission
- Form validation

## 🔐 Production Checklist

- [ ] Update all couple names and details
- [ ] Replace placeholder dates with actual wedding date
- [ ] Add real images to gallery
- [ ] Update contact information
- [ ] Set up email service for RSVP form
- [ ] Add meta tags for social sharing
- [ ] Test on mobile devices
- [ ] Set up analytics (Google Analytics)
- [ ] Get SSL certificate for HTTPS
- [ ] Deploy to production

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## 🛠 Technologies Used

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Google Fonts** - Typography (Playfair Display, Poppins)

## 📝 License

This template is free to use and modify for your wedding website.

## 💡 Tips & Tricks

1. **Customize animations**: Edit animation configs in component files
2. **Add background music**: Uncomment and use HTML5 audio in Hero
3. **Enable dark mode**: Extend Tailwind config with dark: variants
4. **Add video**: Replace static images with videos in sections
5. **Multilingual**: Use next-i18next for translation support

## 🐛 Troubleshooting

**Port 3000 already in use:**
```bash
npm run dev -- -p 3001
```

**Tailwind classes not applying:**
- Ensure file paths in `tailwind.config.js` are correct
- Rebuild: `npm run dev`

**Images not showing:**
- Update image URLs in components
- Enable image optimization in `next.config.js`

---

**Made with ❤️ for Kaushal & Simran**

For questions or support, contact: contact@kaushalsimran.com
