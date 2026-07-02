// Генерирует 6 OG-карточек (1200x630) — по одной на редкость.
// Запуск: node brand/gen-og-cards.mjs && npx sharp-cli ... (см. package-скрипт ниже)
import { RARITIES } from '../web/engine.mjs';
import fs from 'node:fs';
import path from 'node:path';

const OUT = path.resolve(import.meta.dirname, 'og-cards');
fs.mkdirSync(OUT, { recursive: true });

function svgCard(r) {
  const c = r.color;
  const label = r.labelEn.toUpperCase();
  const isTop = r.key === 'legendary' || r.key === 'mythic';
  const sparks = isTop
    ? Array.from({ length: 14 }, (_, i) => {
        const a = (i / 14) * Math.PI * 2;
        const d = 190 + (i % 4) * 40;
        const x = 330 + Math.cos(a) * d;
        const y = 315 + Math.sin(a) * d * 0.72;
        const rr = 3 + (i % 3) * 2;
        return `<circle cx="${x.toFixed(0)}" cy="${y.toFixed(0)}" r="${rr}" fill="${c}" opacity="${0.35 + (i % 3) * 0.2}"/>`;
      }).join('\n    ')
    : '';
  return `<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="bg" cx="35%" cy="35%" r="90%">
      <stop offset="0%" stop-color="#1b2540"/>
      <stop offset="55%" stop-color="#0e1322"/>
      <stop offset="100%" stop-color="#0b0e14"/>
    </radialGradient>
    <linearGradient id="rc" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${c}" stop-opacity="0.95"/>
      <stop offset="100%" stop-color="${c}"/>
    </linearGradient>
    <filter id="glow" x="-60%" y="-60%" width="220%" height="220%">
      <feGaussianBlur stdDeviation="14" result="b"/>
      <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <ellipse cx="330" cy="315" rx="300" ry="260" fill="${c}" opacity="0.10"/>
  ${sparks}
  <!-- карточка-реликвия -->
  <g transform="translate(330,315) rotate(-6)" filter="url(#glow)">
    <rect x="-120" y="-170" width="240" height="340" rx="22" fill="#151c2c" stroke="url(#rc)" stroke-width="7"/>
    <polygon points="0,-78 54,-12 0,54 -54,-12" fill="none" stroke="${c}" stroke-width="10" stroke-linejoin="round"/>
    <line x1="0" y1="-50" x2="0" y2="26" stroke="${c}" stroke-width="10" stroke-linecap="round" opacity="0.9"/>
    <rect x="-78" y="92" width="156" height="14" rx="7" fill="${c}" opacity="0.65"/>
    <rect x="-56" y="122" width="112" height="11" rx="5.5" fill="${c}" opacity="0.35"/>
  </g>
  <!-- текст -->
  <g font-family="Segoe UI, Arial, sans-serif">
    <text x="620" y="255" font-size="34" font-weight="600" fill="#8592a8" letter-spacing="6">TODAY'S DROP</text>
    <text x="616" y="345" font-size="82" font-weight="800" fill="${c}" letter-spacing="2">${label}</text>
    <text x="620" y="410" font-size="27" font-weight="600" fill="#e6ecf5">Crypto Relic <tspan fill="#f59e0b">Day</tspan> · sealed by a Bitcoin block</text>
    <text x="620" y="452" font-size="21" fill="#8592a8">One drop per name per day · no rerolls · provably fair</text>
  </g>
</svg>`;
}

for (const r of RARITIES) {
  fs.writeFileSync(path.join(OUT, r.key + '.svg'), svgCard(r));
  console.log('written', r.key + '.svg');
}
