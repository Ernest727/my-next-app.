# My Next App

Simple dynamic Next.js app that shows server time from an API route.

## Run locally
```bash
npm install
npm run dev
# open http://localhost:3000
```

## Build & start
```bash
npm run build
npm start
```

## Deploy
- **Vercel**: Import this folder in Vercel, no config needed.
- **Netlify**: New site -> Import from Git -> Build command: `npm run build` -> Publish dir: `.next`
  (Netlify auto-detects Next.js and handles functions for API routes).
