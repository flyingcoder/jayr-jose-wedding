import { initCountdown } from './countdown.js';
import { entourageGroups } from './entourage-data.js';
import { initReveal } from './reveal.js';

const SPONSORS_GROUP_TITLE = 'Principal Sponsors';

const CANONICAL_URL = 'https://adriel-ii-josephine.netlify.app/';

function renderEntourage(containerEl, groups) {
  for (const group of groups) {
    const details = document.createElement('details');
    details.className =
      group.title === SPONSORS_GROUP_TITLE ? 'entourage-group entourage-group--sponsors' : 'entourage-group';

    const summary = document.createElement('summary');
    summary.className = 'entourage-group__summary';
    summary.textContent = group.title;
    details.appendChild(summary);

    const content = document.createElement('div');
    content.className = 'entourage-group__content';

    for (const subsection of group.subsections) {
      if (subsection.heading) {
        const heading = document.createElement('p');
        heading.className = 'entourage-group__subheading';
        heading.textContent = subsection.heading;
        content.appendChild(heading);
      }

      const list = document.createElement('ul');
      list.className = 'entourage-group__list';
      for (const member of subsection.members) {
        const item = document.createElement('li');
        item.textContent = member;
        list.appendChild(item);
      }
      content.appendChild(list);
    }

    details.appendChild(content);
    containerEl.appendChild(details);
  }
}

function renderShareQr(canvasEl, linkEl, url) {
  const qr = qrcode(0, 'M');
  qr.addData(url);
  qr.make();

  const cellSize = 5;
  const margin = 4;
  const size = qr.getModuleCount() * cellSize + margin * 2;
  canvasEl.width = size;
  canvasEl.height = size;

  const context = canvasEl.getContext('2d');
  context.fillStyle = 'white';
  context.fillRect(0, 0, size, size);
  context.save();
  context.translate(margin, margin);
  qr.renderTo2dContext(context, cellSize);
  context.restore();

  linkEl.href = url;
  linkEl.textContent = url.replace(/^https?:\/\//, '').replace(/\/$/, '');
}

document.addEventListener('DOMContentLoaded', () => {
  initCountdown({
    gridEl: document.getElementById('countdown-grid'),
    messageEl: document.getElementById('countdown-message'),
    celebrationMessage: 'We said "I do"! Thank you for celebrating with us. 🎉',
  });

  renderEntourage(document.getElementById('entourage-groups'), entourageGroups);

  renderShareQr(
    document.getElementById('qr-canvas'),
    document.getElementById('share-url-link'),
    CANONICAL_URL
  );

  initReveal();
});
