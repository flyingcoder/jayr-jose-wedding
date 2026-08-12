# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: everyone invited to Adriel II J. Gran and Josephine C. Bernales's wedding (Sunday, August 30, 2026, Paseo de Santiago, Iligan City), looking up the date, venue, directions, attire/motif, and entourage roster before and during the event.

Secondary: the couple themselves, sharing the same link/QR code (in family group chats, social posts, and printed inserts) rather than re-explaining logistics one-on-one.

## Product Purpose

A single-page, mobile-first digital hub that replaces reprinting or re-sending the printed invitation suite. It lets guests self-serve every wedding-day logistics question — when, where, how to get there, what to wear, who's in the wedding party — without needing to text or call the couple. It also gives the couple one durable link/QR to hand out instead of managing multiple physical inserts.

## Positioning

Unlike a static invitation PDF or a photo of the printed card, this is a live, always-current, single shareable URL with a one-tap directions link-out (no embedded map). It is explicitly not an RSVP tool or guest-data system — purely a read-only reference surface, so it carries none of the backend, privacy, or maintenance burden a form-based site would.

## Operating Context

Guests view this primarily on their phones — scanning a QR code from a printed insert or opening a shared chat link. Usage clusters in two windows: the lead-up to August 30, 2026 (checking attire/entourage details) and the day itself (finding the venue). The couple shares the same link/QR before and around the event.

## Capabilities and Constraints

- Static site: plain HTML/CSS/JS, no build step, no framework, deployed to Netlify.
- No RSVP collection, no backend, no guest data storage, no multi-page routing, no embedded map iframe (Google Maps link-out instead).
- All factual content (couple names, date, venue, motif colors, entourage/sponsor names and roles) is transcribed from three source images (`1.jpeg`, `2.jpeg`, `3.jpeg`) at the project root — nothing is invented.
- Canonical share URL is a single constant in `scripts/main.js` (`https://adriel-ii-josephine.netlify.app/`), pointing to the finalized Netlify domain.

## Brand Commitments

- Couple: "Adriel II J. Gran" and "Josephine C. Bernales".
- Date/time: Sunday, August 30, 2026, 4:00 PM PST (UTC+8).
- Venue: Paseo de Santiago, Brgy. Santiago, Iligan City.
- Motif: two colors distilled from the print invite's watercolor swatches — light blue and light green — not reproduced at exact pixel values.
- Typography direction: serif/humanist-sans pairing with one script/cursive accent reserved for a single deliberate use, echoing the "and" treatment on the print invite.

## Evidence on Hand

`1.jpeg`, `2.jpeg`, `3.jpeg` at the project root — the printed invitation suite (couple/date/venue card, entourage list, principal sponsors list). All entourage and sponsor names, roles, and honorifics are transcribed from these into `scripts/entourage-data.js`.

`countdown-bg.jpeg` (with a `countdown-bg.webp` build alongside it) — a real candid engagement photo of the couple, used as the Countdown section's top-band background. No other photography, testimonials, or assets exist beyond these; none should be fabricated.

## Product Principles

1. Guests can answer every logistics question (when, where, what to wear, who's in the party) without contacting the couple directly.
2. Fidelity to the printed materials is non-negotiable — names, honorifics, and diacritics must match the source images exactly.
3. This is a read-only reference surface, never a data-collection form.
4. The share link/QR stays valid indefinitely — no build pipeline to maintain, one canonical URL constant to update post-deploy.
5. Mobile-first: most visits happen on a phone, frequently via a scanned QR code.

## Accessibility & Inclusion

No guest-specific requirement beyond standard good practice (confirmed with the couple). Built to normal WCAG-level practice already in place: keyboard-accessible disclosure widgets (native `<details>`/`<summary>`), visible focus states, and `prefers-reduced-motion` support.
