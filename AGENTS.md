Design System Rules

This project uses ONLY the fonts and colors listed below. The old design system
(Playfair Display, Poppins, the old "primary"/"accent"/"gold" color tokens) has
been removed. Do not use them, reference them, or reintroduce them.

Fonts (only these 3 — no other font family may be used)


font-cinzel → labels, small caps text, countdown numbers (pairs with tracking-widest)
font-serif-display → body text, paragraphs, descriptions
font-cursive → hero titles, names, big decorative headings, section headings


Colors (only these — no other color tokens, no raw hex codes, no inline styles)


bg-cream / text-cream → page and section backgrounds
text-rose / text-rose-deep → headings, emphasis, romantic accents
text-gold-soft / border-gold-soft → borders, dividers, accents
bg-sage-soft / text-sage-deep → alternate section backgrounds, secondary labels
text-ink → default body text color


Component Rules


Headings = font-cursive + text-rose-deep
Small-caps labels = font-cinzel + tracking-widest
Body text = font-serif-display + text-ink
Cards = rounded-2xl, border border-gold-soft, shadow-soft (hover: shadow-elegant)
Dividers = a thin border-gold-soft line, optionally with a centered accent icon


Hard Constraints


Never introduce or use a font other than the 3 listed above.
Never use font-display, font-sans, font-serif (old system) — replace any existing use with the fonts above.
Never use primary, accent, gold (old color tokens) or raw hex values — replace any existing use with the colors above.
If you find any component still using the old fonts or colors, update it to match this system.