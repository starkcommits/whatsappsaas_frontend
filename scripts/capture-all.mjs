import fs from 'fs';
import path from 'path';

const outDir = path.resolve('docs/screenshots/after');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// Connect to our running Chrome CDP instance on port 9222
async function getPageWs() {
  const res = await fetch('http://127.0.0.1:9222/json/list');
  const pages = await res.json();
  const page = pages.find(p => p.url.includes('localhost:4322')) || pages[0];
  return page.webSocketDebuggerUrl;
}

function sendCommand(ws, method, params = {}) {
  return new Promise((resolve, reject) => {
    const id = Math.floor(Math.random() * 1000000);
    const handler = (evt) => {
      const msg = JSON.parse(evt.data);
      if (msg.id === id) {
        ws.removeEventListener('message', handler);
        if (msg.error) reject(msg.error);
        else resolve(msg.result);
      }
    };
    ws.addEventListener('message', handler);
    ws.send(JSON.stringify({ id, method, params }));
  });
}

const pages = [
  { name: 'home', path: '/' },
  { name: 'features', path: '/features/' },
  { name: 'pricing', path: '/pricing/' },
  { name: 'how-it-works', path: '/how-it-works/' },
  { name: 'security', path: '/security/' },
  { name: 'use-cases', path: '/use-cases/' },
  { name: 'contact', path: '/contact/' },
];

const viewports = [
  { name: '1440', width: 1440, height: 900, mobile: false, scale: 1 },
  { name: '1024', width: 1024, height: 768, mobile: false, scale: 1 },
  { name: '768', width: 768, height: 1024, mobile: false, scale: 1 },
  { name: '390', width: 390, height: 844, mobile: true, scale: 2 },
];

async function run() {
  const wsUrl = await getPageWs();
  const ws = new WebSocket(wsUrl);

  await new Promise(r => ws.onopen = r);
  await sendCommand(ws, 'Page.enable');

  console.log('Starting exact CDP screenshot capture for all 28 views...');

  for (const page of pages) {
    const url = `http://localhost:4322${page.path}`;
    await sendCommand(ws, 'Page.navigate', { url });
    // Wait for page load
    await new Promise(r => setTimeout(r, 600));

    for (const vp of viewports) {
      await sendCommand(ws, 'Emulation.setDeviceMetricsOverride', {
        width: vp.width,
        height: vp.height,
        deviceScaleFactor: vp.scale,
        mobile: vp.mobile,
      });

      // Allow relayout and animations to settle
      await new Promise(r => setTimeout(r, 400));

      const screenshot = await sendCommand(ws, 'Page.captureScreenshot', {
        format: 'png',
        clip: {
          x: 0,
          y: 0,
          width: vp.width,
          height: vp.height,
          scale: 1,
        },
      });

      const filename = `${page.name}-${vp.name}.png`;
      const filePath = path.join(outDir, filename);
      fs.writeFileSync(filePath, Buffer.from(screenshot.data, 'base64'));
      console.log(`✓ Saved ${filename} (${fs.statSync(filePath).size} bytes)`);
    }
  }

  ws.close();
  console.log('🎉 Successfully captured all 28 screenshots to docs/screenshots/after/!');
}

run().catch(console.error);
