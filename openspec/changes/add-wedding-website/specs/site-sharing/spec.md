## Purpose

Gives the couple a way to point people back to the site from printed materials, via both a scannable QR code and a plain-text link.

## ADDED Requirements

### Requirement: QR code to site
The system SHALL display a QR code that encodes the site's canonical deployed URL.

#### Scenario: QR code resolves to the site
- **WHEN** a device scans the displayed QR code
- **THEN** it navigates to the site's canonical deployed URL

### Requirement: Plain-text link
The system SHALL display the canonical URL as human-readable text alongside the QR code, for contexts where scanning isn't practical.

#### Scenario: Link visible as text
- **WHEN** a visitor scrolls to the Share section
- **THEN** the canonical site URL is displayed as readable text near the QR code
