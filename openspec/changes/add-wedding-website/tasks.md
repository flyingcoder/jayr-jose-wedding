## 1. Project Setup

- [x] 1.1 Create file layout: `index.html`, `styles/tokens.css`, `styles/main.css`, `scripts/main.js`, `scripts/countdown.js`, `scripts/entourage-data.js`, `scripts/qrcode.js`, `assets/`
- [x] 1.2 Set up base HTML document structure (semantic landmarks, mobile-first viewport meta tag) with placeholder sections for hero, countdown, event details, attire, entourage, share
- [x] 1.3 Add a Netlify `_headers` file with baseline security headers (`X-Content-Type-Options`, `Referrer-Policy`, etc.); confirm no build command is required

## 2. Design Tokens & Base Styles

- [x] 2.1 Define distilled color tokens in `styles/tokens.css` (dusty blue, sage green, warm cream base) as CSS custom properties
- [x] 2.2 Define typography tokens: serif for display, humanist sans for body, one script/cursive accent reserved for a single deliberate use; `font-display: swap`
- [x] 2.3 Define spacing/duration/easing tokens following the project's CSS custom property conventions
- [x] 2.4 Build mobile-first base layout styles (container widths, breakpoints) in `styles/main.css`

## 3. Hero Section

- [x] 3.1 Markup couple names, wedding date, and venue teaser in a semantic `<header>`/`<section>` (per `hero-section` spec)
- [x] 3.2 Style hero with real hierarchy/rhythm — avoid the generic centered-hero-with-gradient-blob pattern
- [x] 3.3 Verify hero content is visible without scrolling at a 375px-wide viewport

## 4. Countdown Timer

- [x] 4.1 Implement `scripts/countdown.js`: fixed target instant `2026-08-30T16:00:00+08:00`, `setInterval` tick, render days/hours/minutes/seconds
- [x] 4.2 Implement the post-event celebratory message state for when the current time is at or after the target
- [x] 4.3 Style countdown digits/labels using only compositor-friendly animation properties
- [x] 4.4 Manually verify both states (before and after ceremony start) using a spoofed system clock

## 5. Event Details

- [x] 5.1 Markup venue name, address, and date/time (per `event-details` spec)
- [x] 5.2 Add a "Get Directions" button linking to `https://maps.app.goo.gl/QripTx3BikKoCcrz7` with `target="_blank" rel="noopener noreferrer"`
- [x] 5.3 Style the button with intentional hover/focus/active states

## 6. Attire Guide

- [x] 6.1 Markup motif color swatches (light blue, light green) matching the design tokens from Section 2
- [x] 6.2 Markup dress code by guest type — principal sponsors, gentlemen, ladies — per `attire-guide` spec
- [x] 6.3 Style as a compact, scannable block near Event Details

## 7. Entourage Directory

- [x] 7.1 Transcribe all entourage/sponsor names, roles, and titles from `1.jpeg`, `2.jpeg`, `3.jpeg` into `scripts/entourage-data.js`, grouped into the five categories from the `entourage-directory` spec
- [x] 7.2 Render each group as a native `<details>`/`<summary>` element, closed by default
- [x] 7.3 Style `<summary>` markers and expanded content, overriding default browser disclosure styling
- [x] 7.4 Verify keyboard navigation (tab to each group header, Enter/Space to expand) works correctly

## 8. Share Section

- [x] 8.1 Vendor a small, dependency-free QR-generation script into `scripts/qrcode.js`
- [x] 8.2 Render a QR code encoding a canonical URL constant (placeholder value until the Netlify domain is finalized)
- [x] 8.3 Display the canonical URL as plain text alongside the QR code
- [x] 8.4 Style the share section

## 9. Content Verification

- [x] 9.1 Proofread all transcribed text (names, honorifics, diacritics, date, venue, motif colors) against `1.jpeg`, `2.jpeg`, `3.jpeg` for exact fidelity
- [x] 9.2 Walk every scenario in `specs/` against the built page manually and confirm it passes

## 10. Deployment

- [ ] 10.1 Connect this repository to Netlify; set the publish directory; confirm no build command is configured
- [ ] 10.2 Update the QR code's canonical URL constant to the final Netlify domain and redeploy
- [ ] 10.3 Smoke-test the deployed site on a real mobile device: Get Directions opens maps, countdown ticks, entourage groups expand
