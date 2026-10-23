import sharp from 'sharp';
import fs from 'node:fs';

const svg = `
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#052e16"/>
      <stop offset="50%" stop-color="#14532d"/>
      <stop offset="100%" stop-color="#0f172a"/>
    </linearGradient>
    <linearGradient id="badgeG" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#22c55e"/>
      <stop offset="100%" stop-color="#15803d"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="630" fill="url(#bg)"/>

  <!-- Subtle circles -->
  <circle cx="1050" cy="150" r="280" fill="#22c55e" fill-opacity="0.08"/>
  <circle cx="150" cy="500" r="220" fill="#16a34a" fill-opacity="0.06"/>

  <!-- Logo Mark -->
  <g transform="translate(100, 100)">
    <rect width="72" height="72" rx="18" fill="url(#badgeG)"/>
    <text x="36" y="49" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="40" font-weight="900" fill="white" text-anchor="middle">O</text>
    <text x="96" y="50" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="44" font-weight="900" fill="white" letter-spacing="-1">ONO</text>
  </g>

  <!-- Badge Pill -->
  <g transform="translate(100, 210)">
    <rect width="280" height="38" rx="19" fill="#22c55e" fill-opacity="0.2" stroke="#4ade80" stroke-opacity="0.4"/>
    <text x="140" y="24" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="14" font-weight="700" fill="#86efac" text-anchor="middle" letter-spacing="1">LIFETIME ACCESS • $50 / ₹4,199</text>
  </g>

  <!-- Main Headline -->
  <text x="100" y="310" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="52" font-weight="800" fill="white" letter-spacing="-1.5">
    The WhatsApp Business Platform
  </text>
  <text x="100" y="375" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="52" font-weight="800" fill="#4ade80" letter-spacing="-1.5">
    With Zero Per-Message Markup
  </text>

  <!-- Subheadline -->
  <text x="100" y="445" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="22" font-weight="400" fill="#cbd5e1">
    Shared team inbox • Broadcast campaigns • Consent tracking • WhatsApp Flows
  </text>

  <!-- Footer Highlights -->
  <g transform="translate(100, 520)">
    <text x="0" y="0" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="16" font-weight="600" fill="#94a3b8">
      ✓ Pay once, no monthly fee
    </text>
    <text x="280" y="0" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="16" font-weight="600" fill="#94a3b8">
      ✓ Direct Meta API billing
    </text>
    <text x="560" y="0" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="16" font-weight="600" fill="#94a3b8">
      ✓ 7-day money-back guarantee
    </text>
  </g>
</svg>
`;

async function run() {
  if (!fs.existsSync('public')) {
    fs.mkdirSync('public', { recursive: true });
  }
  await sharp(Buffer.from(svg))
    .png()
    .toFile('public/og-image.png');
  console.log('Generated public/og-image.png');
}

run().catch(console.error);
