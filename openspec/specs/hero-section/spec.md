# hero-section Specification

## Purpose

Presents the couple's names, wedding date, and venue as the first impression for any visitor, establishing who/when/where before they scroll further.

## Requirements

### Requirement: Display couple names and date
The system SHALL display the couple's first names ("Adriel" and "Josephine") and the wedding date ("Sunday, August 30, 2026") in the hero section, visible without scrolling on a mobile viewport (≤480px width). The couple's full legal names ("Adriel II J. Gran" and "Josephine C. Bernales") SHALL remain available to assistive technology and search indexing via an accessible name on the heading.

#### Scenario: Hero renders on load
- **WHEN** a visitor loads the site on a mobile-width viewport
- **THEN** the couple's first names and wedding date are visible within the initial viewport without scrolling

#### Scenario: Full names available to assistive technology
- **WHEN** a screen reader announces the hero heading
- **THEN** it announces the couple's full legal names, not just their first names

### Requirement: Venue teaser
The hero section SHALL include a short venue teaser (venue name and city) that visually points toward the full Event Details section below.

#### Scenario: Venue teaser visible
- **WHEN** the hero section renders
- **THEN** a short venue reference ("Paseo de Santiago, Iligan City") is displayed beneath the couple's names
