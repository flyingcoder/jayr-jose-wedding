# event-details Specification

## Purpose

Tells visitors exactly when and where the ceremony takes place and gets them to a map with one tap, without embedding a heavy third-party map on the page.

## Requirements

### Requirement: Display venue information
The system SHALL display the ceremony date, start time, venue name, and address ("Paseo de Santiago, Brgy. Santiago, Iligan City").

#### Scenario: Event details visible
- **WHEN** a visitor scrolls to the Event Details section
- **THEN** the ceremony date, time, venue name, and address are all displayed

### Requirement: Directions link-out
The system SHALL provide a "Get Directions" control that opens the venue's Google Maps location (https://maps.app.goo.gl/QripTx3BikKoCcrz7) in a new browsing context, without embedding a map iframe on the page.

#### Scenario: Visitor requests directions
- **WHEN** a visitor activates the "Get Directions" control
- **THEN** the venue's Google Maps location opens in a new tab or the visitor's native maps app

#### Scenario: No embedded map
- **WHEN** the Event Details section renders
- **THEN** no map iframe or embedded map widget is loaded on the page
