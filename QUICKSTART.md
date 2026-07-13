# 🚀 Quick Start Guide

## ⚡ 30-Second Setup

```bash
# 1. Navigate to project
cd wedding-invitation

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Open browser
# Visit http://localhost:3000
```

## ✅ What You Get

- ✨ Fully animated wedding invitation website
- 📱 Mobile responsive design
- 🎨 Clean, elegant aesthetic (White + Blush Rose Gold + Navy Blue)
- ⏱️ Live countdown timer
- 📅 Wedding schedule/events
- 🖼️ Photo gallery with lightbox
- 📝 Working RSVP form
- 🚀 Ready to deploy

## 🎯 First Steps to Customize

### 1. Update Couple Names
- Open: `src/components/Hero.tsx`
- Line 48-50: Change "Kaushal" and "Simran" to your names
- Save and see changes live!

### 2. Update Wedding Date
- Open: `src/components/CountdownTimer.tsx`
- Line 24: Change date to your wedding date
- Example: `new Date('2025-12-20')` for Dec 20, 2025

### 3. Update Contact Info
- Open: `src/components/Footer.tsx`
- Update email and phone number

### 4. Customize Events/Timeline
- Open: `src/components/Story.tsx` for couple timeline
- Open: `src/components/Events.tsx` for wedding schedule
- Update all the details as needed

## 🎨 Color Customization

Want different colors? Edit `tailwind.config.js`:

```javascript
colors: {
  primary: {
    500: '#D4A5A5', // Change this hex for new primary color
  },
  accent: {
    500: '#1B3A5C', // Change this hex for new accent color
  },
}
```

Save and refresh! Colors update instantly.

## 📸 Adding Real Photos

Gallery currently uses emojis. To add real images:

1. Open: `src/components/Gallery.tsx`
2. Replace the emoji URLs with real image URLs
3. Update the `galleryImages` array

## 📧 RSVP Form Setup

The form currently logs to console. To actually receive emails:

**Option 1: EmailJS (Easiest)**
1. Sign up at [emailjs.com](https://emailjs.com)
2. Get your Service ID, Template ID, and Public Key
3. Add to `.env.local`:
   ```
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_key
   ```

**Option 2: SendGrid**
1. Sign up at [sendgrid.com](https://sendgrid.com)
2. Get API key
3. Update RSVP form handler to use SendGrid API

## 🚀 Deploy in 5 Minutes

### Deploy to Vercel (Recommended)
```bash
npm install -g vercel
vercel
```
Done! Your site is live.

### Deploy to Netlify
1. Push code to GitHub
2. Connect repo to [netlify.com](https://netlify.com)
3. Auto-deploys on every push

## 📱 Test on Mobile

```bash
# Your local IP (e.g., 192.168.x.x)
npm run dev

# On mobile, visit: http://your-local-ip:3000
```

## 🔗 Custom Domain

1. Buy domain from GoDaddy, Namecheap, etc.
2. Update DNS to point to your hosting
3. Add domain in Vercel/Netlify dashboard

## 📊 Add Analytics

To track visitors, add Google Analytics:

1. Get your GA ID from google.com/analytics
2. Add to `.env.local`:
   ```
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```
3. Update `src/app/layout.tsx` to include GA script

## ❓ Common Questions

**Q: Can I add music?**
A: Yes! Add an `<audio>` tag to Hero component

**Q: Can I add a guestbook?**
A: Yes! Create a new component and add to page.tsx

**Q: How do I add more sections?**
A: Create a new component in `src/components/` and import in `src/app/page.tsx`

**Q: Can I use my own fonts?**
A: Yes! Import from Google Fonts in `src/globals.css`

## 🆘 Troubleshooting

**Site not updating after changes?**
- Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)

**Port 3000 in use?**
```bash
npm run dev -- -p 3001
```

**Styles not applying?**
- Check `tailwind.config.js` file paths are correct
- Restart dev server

## 📞 Support

For customization help:
- Check the README.md for detailed docs
- Review component comments in code
- Component files are well-documented

---

**Ready to go live?** Follow the Deploy section above! 🎉

**Questions?** All components have helpful comments explaining what they do.

Made with ❤️ for your wedding website!
