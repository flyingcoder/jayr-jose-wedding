## Context

See proposal.md - Why. This is a greenfield, no-backend static site; there is no existing architecture to work within. Constraints carried over from the proposal: plain HTML/CSS/JS with no build step, no framework, Netlify hosting, mobile-first, no RSVP/backend/CMS.

## Goals / Non-Goals

**Goals:**
- A single `index.html` (plus a handful of CSS/JS/asset files) that runs correctly with zero build tooling.
- A distilled visual identity (palette + type) derived from the print invitation's motif swatches, expressed as reusable CSS custom properties.
- Entourage/sponsor content transcribed once, from a single source of truth, so it's easy to audit against the source images before launch.

**Non-Goals:**
- No client-side routing or multi-page navigation — this is one scrolling document.
- No analytics, RSVP, or any form that submits data anywhere.
- No embedded third-party map widget.

## Decisions

- **File layout**: `index.html` at the root, `styles/tokens.css` (design tokens) + `styles/main.css` (layout/components), `scripts/countdown.js`, `scripts/entourage-data.js` (content), `scripts/qrcode.js` (vendored, dependency-free QR renderer), `scripts/main.js` (wiring). Organized by concern per the project's web coding-style rules, kept flat since the site is small enough that a deep feature-folder structure would be premature.
  - Alternative considered: bundler-based setup (Vite/Astro) for component structure. Rejected — the user explicitly chose plain vanilla with no build step, and the page is small enough that component tooling would add maintenance overhead without a matching benefit.

- **Countdown timezone handling**: compute the target instant using an ISO 8601 string with an explicit UTC+8 offset (`2026-08-30T16:00:00+08:00`) passed to `Date.parse`/`new Date(...)`, rather than relying on IANA timezone lookups (`Intl.DateTimeFormat` with `Asia/Manila`). An explicit numeric offset is unambiguous across browsers and requires no timezone database reasoning; each visitor's own `Date` object already renders in their local time once the target instant is fixed. Re-render every second via `setInterval`; check `now >= target` each tick and swap to the post-event message per the countdown-timer spec's second requirement.

- **Entourage disclosure widget**: use native `<details>`/`<summary>` elements for each group instead of custom JS-driven show/hide. This satisfies "closed by default" behavior with zero JavaScript, is keyboard-accessible and screen-reader-friendly by default, and matches the project's semantic-HTML-first rule.
  - Alternative considered: a hand-rolled accordion with `aria-expanded` and JS toggle. Rejected — `<details>` gives the same behavior for free with less code and no accessibility bugs to introduce.

- **Get Directions control**: a plain `<a>` anchor to the Google Maps URL with `target="_blank" rel="noopener noreferrer"`, styled as a button. No JS required; satisfies the link-out requirement directly and keeps the wedding site itself open in the visitor's other tab.

- **Content data source**: entourage and principal sponsor names live in one JS data module (`scripts/entourage-data.js`) as plain arrays/objects grouped by the five categories from the entourage-directory spec, rendered into `<details>` groups at load time. Centralizing the data in one file (rather than hand-writing 60+ names directly into HTML) makes it straightforward to proofread against the three source images (`1.jpeg`, `2.jpeg`, `3.jpeg`) in one pass and keeps markup generation consistent across groups.

- **QR code generation**: vendor a single small, dependency-free, public-domain-licensed QR-generation script (client-side, canvas or SVG output, no network call, no CDN) rather than shipping a pre-rendered static image. This avoids needing to regenerate an image asset if the final Netlify URL changes before launch, and keeps the "no build step" constraint intact (it's just one more `<script>` tag, not a package-manager dependency). The canonical URL it encodes is defined as a single constant, updated once the production Netlify domain is finalized.

- **Design tokens**: palette and type expressed as CSS custom properties in `styles/tokens.css` per the project's web coding-style rules — a muted dusty-blue and sage-green pair plus a warm cream base (distilled from the print invite's motif swatches, not the swatches' exact pixel values), a serif for display text, a humanist sans for body text, and one script/cursive typeface reserved for a single accent use (echoing the "and" treatment on the print invite) rather than applied broadly.

- **Netlify deployment**: static publish, no build command (publish directory = repo root or a plain `public/` folder — decided during implementation based on final file layout). Security headers (`X-Content-Type-Options`, `Referrer-Policy`, etc.) added via a Netlify `_headers` file rather than server config, since there's no app server to configure.

## Risks / Trade-offs

- **Transcription errors** in the ~60-person entourage/sponsor list (misspelled names, dropped diacritics, wrong honorifics) → Mitigation: single content-data file makes one focused proofreading pass against the three source images practical; call this out as an explicit task before launch.
- **Client clock drift** could make the countdown briefly inaccurate on a visitor's misconfigured device → Mitigation: acceptable for this use case (no transactional consequence); not worth server-side time sync for a static site.
- **QR code encodes a URL decided before the final Netlify domain exists** → Mitigation: treat the encoded URL as a named constant updated as one of the last tasks, once the site is deployed and the domain is known.
- **Native `<details>` default styling is browser-specific** and may look inconsistent without CSS overrides → Mitigation: style the `<summary>` marker and content explicitly rather than relying on browser defaults, covered in the relevant implementation task.

## Migration Plan

Greenfield project — no existing system to migrate from or data to backfill. Initial deploy: connect this repository to Netlify, set publish directory per the final file layout, no build command. Rollback is Netlify's built-in previous-deploy rollback (no custom rollback logic needed).
