import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';

const publicDir = path.resolve('public');

async function generateAssets() {
  console.log('Generating PNG favicons, touch icons, and OG image...');

  // 1. Generate favicon 32x32 PNG
  const faviconSvg = fs.readFileSync(path.join(publicDir, 'favicon.svg'));
  await sharp(faviconSvg)
    .resize(32, 32)
    .png()
    .toFile(path.join(publicDir, 'favicon-32x32.png'));

  // 2. Generate Apple Touch Icon (180x180)
  const touchIconSvg = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 180" width="180" height="180" fill="none">
    <rect width="180" height="180" rx="36" fill="#07111F"/>
    <circle cx="55" cy="90" r="28" stroke="#12A57D" stroke-width="14"/>
    <path d="M83 90h14" stroke="#D7F75B" stroke-width="14" stroke-linecap="round"/>
    <circle cx="125" cy="90" r="28" stroke="#12A57D" stroke-width="14"/>
  </svg>
  `;
  await sharp(Buffer.from(touchIconSvg))
    .resize(180, 180)
    .png()
    .toFile(path.join(publicDir, 'apple-touch-icon.png'));

  // 3. Generate 512x512 Icon
  const icon512Svg = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512" fill="none">
    <rect width="512" height="512" rx="100" fill="#07111F"/>
    <circle cx="156" cy="256" r="80" stroke="#12A57D" stroke-width="40"/>
    <path d="M236 256h40" stroke="#D7F75B" stroke-width="40" stroke-linecap="round"/>
    <circle cx="356" cy="256" r="80" stroke="#12A57D" stroke-width="40"/>
  </svg>
  `;
  await sharp(Buffer.from(icon512Svg))
    .resize(512, 512)
    .png()
    .toFile(path.join(publicDir, 'favicon-512x512.png'));

  // Also write to public/logo.png (512x512 high-res symbol)
  await sharp(Buffer.from(icon512Svg))
    .resize(512, 512)
    .png()
    .toFile(path.join(publicDir, 'logo.png'));

  // 4. Generate Open Graph Image 1200x630
  const ogSvg = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" width="1200" height="630" fill="none">
    <!-- Dark Ink Background with Subtle Gradient -->
    <rect width="1200" height="630" fill="#07111F"/>
    <radialGradient id="ogGlow" cx="20%" cy="30%" r="60%">
      <stop offset="0%" stop-color="#0E8A68" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#07111F" stop-opacity="0"/>
    </radialGradient>
    <rect width="1200" height="630" fill="url(#ogGlow)"/>

    <!-- Subtle Grid Lines -->
    <defs>
      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#243447" stroke-width="0.5" stroke-opacity="0.3"/>
      </pattern>
    </defs>
    <rect width="1200" height="630" fill="url(#grid)" opacity="0.6"/>

    <!-- Top Badge -->
    <g transform="translate(100, 100)">
      <rect width="320" height="40" rx="20" fill="#0B1B2E" stroke="#243447" stroke-width="1"/>
      <circle cx="24" cy="20" r="4" fill="#D7F75B"/>
      <text x="38" y="25" fill="#E8ECF0" font-family="system-ui, sans-serif" font-size="14" font-weight="600" letter-spacing="0.5">BUILT ON META CLOUD API</text>
    </g>

    <!-- Logo Lockup -->
    <g transform="translate(100, 180)">
      <!-- ONO Geometric Link Mark -->
      <g transform="translate(0, 0)">
        <circle cx="30" cy="40" r="22" stroke="#12A57D" stroke-width="11" fill="none"/>
        <path d="M52 40h16" stroke="#D7F75B" stroke-width="11" stroke-linecap="round"/>
        <circle cx="90" cy="40" r="22" stroke="#12A57D" stroke-width="11" fill="none"/>
      </g>
      <!-- Wordmark -->
      <text x="145" y="58" fill="#FFFFFF" font-family="system-ui, sans-serif" font-weight="900" font-size="64" letter-spacing="-1">ONO</text>
    </g>

    <!-- Main Headline -->
    <text x="100" y="340" fill="#FFFFFF" font-family="system-ui, sans-serif" font-weight="800" font-size="46" letter-spacing="-1">Every customer conversation on WhatsApp,</text>
    <text x="100" y="398" fill="#FFFFFF" font-family="system-ui, sans-serif" font-weight="800" font-size="46" letter-spacing="-1">in one shared inbox.</text>

    <!-- Subtitle / Value Props -->
    <text x="100" y="468" fill="#B8C2CC" font-family="system-ui, sans-serif" font-weight="500" font-size="22">Shared inbox • Approved templates • Campaigns • Consent ledger</text>

    <!-- Pricing Callout -->
    <g transform="translate(100, 520)">
      <text x="0" y="30" fill="#12A57D" font-family="system-ui, sans-serif" font-weight="700" font-size="22">Lifetime access $50 • Pay once • No per-message markup</text>
    </g>
  </svg>
  `;

  await sharp(Buffer.from(ogSvg))
    .resize(1200, 630)
    .png()
    .toFile(path.join(publicDir, 'og-image.png'));

  console.log('✅ All assets generated successfully in public/');
}

generateAssets().catch(console.error);
