## Why

Adriel II J. Gran and Josephine C. Bernales are marrying on Sunday, August 30, 2026 in Iligan City. They have a printed invitation suite (couple/date/venue card, entourage list, principal sponsors list) but no digital hub guests can revisit for event details, the map, attire guidance, and the full entourage. A small mobile-first site gives guests a shareable, always-current reference without reprinting anything.

## What Changes

- Add a single-page, mobile-first static website with six sections in scroll order: Hero, Countdown, Event Details, Attire/Motif, Entourage, Share.
- Add a live countdown timer to the ceremony start (Aug 30, 2026, 4:00 PM Asia/Manila).
- Add a "Get Directions" link-out button to the venue's Google Maps location (no embedded map iframe).
- Add an attire/motif guide summarizing the dress code by guest type and the two motif colors (light blue, light green).
- Add an entourage directory covering all roles from the printed materials (parents/officiant, best man/maid of honor, groomsmen/bridesmaids, flower girls/bearers/cord, principal sponsors), grouped into collapsible sections that are closed by default.
- Add a share section with a QR code and link back to the deployed site, for use on printed inserts.
- Establish a distilled visual design system (palette pulled from the print invite's motif swatches, serif/script type pairing) rather than reproducing the print invite's illustration-heavy watercolor art.
- Deploy target is Netlify; implementation is plain HTML/CSS/JS with no build step and no framework.

Explicitly out of scope: RSVP collection, any backend/CMS, guest data storage, multi-page routing, embedded map iframes.

## Capabilities

### New Capabilities
- `hero-section`: Displays the couple's names, wedding date, and a venue teaser as the first thing a visitor sees.
- `countdown-timer`: Computes and live-updates a countdown to the ceremony start time in the correct timezone.
- `event-details`: Displays venue name/address and a directions button that opens the venue's location in the visitor's map app.
- `attire-guide`: Displays the wedding motif colors and the dress code expected per guest type.
- `entourage-directory`: Displays the full wedding party and principal sponsors, organized into collapsible, closed-by-default groups.
- `site-sharing`: Provides a QR code and canonical link back to the site for reuse in printed materials.

### Modified Capabilities
(none — this is a new project with no existing specs)

## Impact

- **New code**: static site (HTML/CSS/JS) with no server-side component.
- **Content source**: names, roles, date, venue, and motif colors are transcribed from the three source images at the project root (`1.jpeg`, `2.jpeg`, `3.jpeg`); no data is invented.
- **Hosting**: Netlify, deployed from this repository.
- **Dependencies**: none beyond a QR code generation approach decided in design.md (client-side library or pre-generated static asset).
