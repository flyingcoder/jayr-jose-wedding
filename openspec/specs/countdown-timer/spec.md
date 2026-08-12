# countdown-timer Specification

## Purpose

Gives visitors an at-a-glance sense of how much time remains before the ceremony begins, reinforcing anticipation and giving them a reason to prepare in advance.

## Requirements

### Requirement: Live countdown to ceremony start
The system SHALL display a continuously updating countdown (days, hours, minutes, seconds) counting down to the ceremony start time of August 30, 2026, 4:00 PM Philippine Standard Time (UTC+8), regardless of the visitor's local timezone.

#### Scenario: Countdown reflects correct remaining time
- **WHEN** a visitor loads the site before the ceremony start time
- **THEN** the countdown displays the correct remaining days, hours, minutes, and seconds computed against the ceremony's fixed UTC+8 start instant, converted to the visitor's local clock

#### Scenario: Countdown updates without reload
- **WHEN** a visitor keeps the page open
- **THEN** the displayed countdown values update at least once per second without requiring a page reload

### Requirement: Post-event state
When the current time is at or after the ceremony start time, the system SHALL replace the numeric countdown with a celebratory message instead of showing zero or negative values.

#### Scenario: Visitor arrives after ceremony start
- **WHEN** a visitor loads the site at or after August 30, 2026, 4:00 PM PST
- **THEN** the countdown section displays a celebratory message instead of a numeric countdown
