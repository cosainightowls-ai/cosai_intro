# cosai — Chief of Staff AI

Simple React frontend for cosai: a calm AI that filters social media + news noise, learns your preferences gradually, and weaves in weather/location/events to suggest what to do next.

## Run it

```bash
npm install
npm run dev
```

Then open http://localhost:5173

## Routes

- `/` — landing page (hero, features, how-it-learns, testimonials, CTA)
- `/onboarding` — 5-step onboarding flow (topics → sources → tone → location → done)
- `/blog` — SEO-friendly journal with sample posts
- `/blog/:slug` — post page

## Stack

Vite + React 18 + react-router-dom. No UI library — single plain CSS file with a dark glassy theme, animated aurora background, large rounded friendly type.

## Where to edit

- [src/App.jsx](src/App.jsx) — landing copy
- [src/pages/Onboarding.jsx](src/pages/Onboarding.jsx) — onboarding steps & options
- [src/pages/posts.js](src/pages/posts.js) — blog content (add posts here)
- [src/styles.css](src/styles.css) — theme tokens at the top (`:root`)
- [index.html](index.html) — SEO meta tags
