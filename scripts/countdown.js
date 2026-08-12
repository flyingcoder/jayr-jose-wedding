const CEREMONY_START = '2026-08-30T16:00:00+08:00';
const TICK_INTERVAL_MS = 1000;
const MS_PER_SECOND = 1000;
const MS_PER_MINUTE = 60 * MS_PER_SECOND;
const MS_PER_HOUR = 60 * MS_PER_MINUTE;
const MS_PER_DAY = 24 * MS_PER_HOUR;

function computeRemaining(now, target) {
  const diff = target.getTime() - now.getTime();
  if (diff <= 0) {
    return null;
  }
  return {
    days: Math.floor(diff / MS_PER_DAY),
    hours: Math.floor((diff % MS_PER_DAY) / MS_PER_HOUR),
    minutes: Math.floor((diff % MS_PER_HOUR) / MS_PER_MINUTE),
    seconds: Math.floor((diff % MS_PER_MINUTE) / MS_PER_SECOND),
  };
}

function renderUnit(valueEl, nextValue) {
  const nextText = String(nextValue).padStart(2, '0');
  if (valueEl.textContent === nextText) {
    return;
  }
  valueEl.textContent = nextText;
  valueEl.classList.remove('countdown__value--tick');
  // Force reflow so the animation class can be re-applied on consecutive ticks.
  void valueEl.offsetWidth;
  valueEl.classList.add('countdown__value--tick');
}

export function initCountdown({ gridEl, messageEl, celebrationMessage, targetIso = CEREMONY_START }) {
  const target = new Date(targetIso);
  const unitEls = {
    days: gridEl.querySelector('[data-unit="days"]'),
    hours: gridEl.querySelector('[data-unit="hours"]'),
    minutes: gridEl.querySelector('[data-unit="minutes"]'),
    seconds: gridEl.querySelector('[data-unit="seconds"]'),
  };

  let intervalId = null;

  function tick() {
    const remaining = computeRemaining(new Date(), target);

    if (remaining === null) {
      gridEl.hidden = true;
      messageEl.hidden = false;
      messageEl.textContent = celebrationMessage;
      if (intervalId !== null) {
        clearInterval(intervalId);
      }
      return;
    }

    renderUnit(unitEls.days, remaining.days);
    renderUnit(unitEls.hours, remaining.hours);
    renderUnit(unitEls.minutes, remaining.minutes);
    renderUnit(unitEls.seconds, remaining.seconds);
  }

  tick();
  intervalId = setInterval(tick, TICK_INTERVAL_MS);
  return intervalId;
}
