# 23D Studio website (v2)

Next.js 15 (App Router) site for 23D Studio, Nashik — video-led design with five pages:
Home, About, Services, Work and Contact.

## Run locally

```bash
npm install
cp .env.example .env.local   # add your EmailJS keys
npm run dev                  # http://localhost:3000
```

Build for production with `npm run build`, then `npm start`. The `postbuild` step generates
`sitemap.xml` and `robots.txt` with next-sitemap.

## Where things live

- `src/data/site.js` — all text content: services, team, work items, stats, FAQ, contact details.
  Edit this file to change copy without touching layouts.
- `src/app/` — one folder per page; `template.js` plays the blue page-transition curtain.
- `src/components/` — header, footer, cursor, video, work gallery (filters + lightbox), contact form, FAQ.
- `src/app/globals.css` — design tokens (colours at the top), layout and all animations.
- `public/media/` — videos, images, team photos and the client logo strip.

## Videos

- `showreel.mp4` and `reel-*.mp4` — animated from the studio's own renders.
- `3d-carousel.mp4`, `3d-flythrough.mp4`, `3d-layers.mp4` — 3D camera animations built from the renders
  (orbiting carousel, fly-through and exploded layers).

Every video has a matching `.jpg` poster with the same name, shown while loading or when a phone
blocks autoplay (for example in Low Power Mode). Videos only play while on screen.
To use real footage, replace a file with the same name (H.264 MP4, ideally under 5 MB) and its poster.

## Mobile

Below 900px the header switches to an animated full-screen menu. Layouts stack for phones,
filters become a swipeable row, the work viewer supports swiping, and taps get the same feedback
as hover on desktop.

## Contact form

Uses EmailJS with the same environment variables as the original project. Form fields sent:
`user_name`, `user_phone`, `user_email`, `service`, `message`.

## Animations

Scroll-linked effects use native CSS scroll-driven animations (Chrome, Edge, Android and recent Safari).
In browsers without them (Firefox, older iPhones) `src/components/Motion.js` reproduces the same
reveals, count-ups, hero zoom and progress bar with JavaScript, so every animation also runs on phones.
Everything switches off for visitors who have reduced motion enabled.

## Still to fill in

- Opening hours (`CONTACT.hours` in `src/data/site.js`)
- Client reviews, if you want a reviews section

Website designed & managed by Hiresnix.
