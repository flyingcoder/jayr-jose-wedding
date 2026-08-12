# hero-section Specification

## Purpose

Presents the couple's names, wedding date, and venue as the first impression for any visitor, establishing who/when/where before they scroll further.

## Requirements

### Requirement: Display couple names and date
The system SHALL display the couple's full names ("Adriel II J. Gran" and "Josephine C. Bernales") and the wedding date ("Sunday, August 30, 2026") in the hero section, visible without scrolling on a mobile viewport (≤480px width).

#### Scenario: Hero renders on load
- **WHEN** a visitor loads the site on a mobile-width viewport
- **THEN** the couple's names and wedding date are visible within the initial viewport without scrolling

### Requirement: Venue teaser
The hero section SHALL include a short venue teaser (venue name and city) that visually points toward the full Event Details section below.

#### Scenario: Venue teaser visible
- **WHEN** the hero section renders
- **THEN** a short venue reference ("Paseo de Santiago, Iligan City") is displayed beneath the couple's names
