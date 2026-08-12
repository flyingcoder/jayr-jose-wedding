# entourage-directory Specification

## Purpose

Presents the full wedding party and principal sponsors from the printed invitation, organized so visitors can find any role without scrolling through one long undifferentiated list of names.

## Requirements

### Requirement: Grouped role categories
The system SHALL organize entourage members into the following groups, in this order: Parents & Officiant, Best Man & Maid of Honor, Groomsmen & Bridesmaids, Flower Girls / Bearers & Cord, Principal Sponsors.

#### Scenario: Groups render in order
- **WHEN** a visitor scrolls to the Entourage section
- **THEN** the five groups appear in the specified order

### Requirement: Closed by default
Each entourage group SHALL be collapsed (not showing member names) when the page first loads, and SHALL expand to reveal its members when the visitor interacts with its group header.

#### Scenario: Groups collapsed on load
- **WHEN** the Entourage section first renders
- **THEN** no group's member list is visible until the visitor expands it

#### Scenario: Visitor expands a group
- **WHEN** a visitor activates a group header
- **THEN** that group's member list becomes visible while other groups remain in their current state

### Requirement: Content fidelity to source materials
Every name, role, and title within the entourage directory SHALL match the printed invitation materials exactly, including honorifics/rank prefixes (e.g., "PLT", "PLTCOL", "Ptr.", "Engr.") and diacritics (e.g., "Bañares", "Soriño").

#### Scenario: Names match source
- **WHEN** any entourage or principal sponsor entry is displayed
- **THEN** its spelling, honorifics, and diacritics match the corresponding entry in the source invitation images exactly
