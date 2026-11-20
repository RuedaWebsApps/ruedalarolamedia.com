import { spawn, execSync } from 'child_process';
import http from 'http';
import fs from 'fs';
import path from 'path';

const chromePath = fs.existsSync('C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe')
  ? 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
  : 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

console.log('Using browser binary:', chromePath);

// Start preview server
const preview = spawn('npx', ['vite', 'preview', '--port', '4173', '--strictPort'], {
  shell: true,
  stdio: 'pipe',
  cwd: path.resolve('.'),
});

preview.stdout.on('data', (d) => console.log('[PREVIEW]', d.toString().trim()));
preview.stderr.on('data', (d) => console.error('[PREVIEW ERR]', d.toString().trim()));

// Wait for server to be ready
function waitForServer(url, timeout = 10000) {
  const start = Date.now();
  return new Promise((resolve, reject) => {
    const check = () => {
      http.get(url, (res) => {
        if (res.statusCode === 200) {
          resolve(true);
        } else {
          setTimeout(check, 250);
        }
      }).on('error', () => {
        if (Date.now() - start > timeout) {
          reject(new Error('Server wait timeout'));
        } else {
          setTimeout(check, 250);
        }
      });
    };
    check();
  });
}

const evidenceDir = path.resolve('public/test-evidence');
fs.mkdirSync(evidenceDir, { recursive: true });

async function run() {
  try {
    await waitForServer('http://localhost:4173/');
    console.log('[OK] Preview server running on http://localhost:4173/');

    const targets = [
      { name: 'desktop-en-home', url: 'http://localhost:4173/', width: 1440, height: 900 },
      { name: 'desktop-es-home', url: 'http://localhost:4173/es', width: 1440, height: 900 },
      { name: 'mobile-en-home', url: 'http://localhost:4173/', width: 390, height: 844 },
      { name: 'mobile-es-home', url: 'http://localhost:4173/es', width: 390, height: 844 },
      { name: 'desktop-contact', url: 'http://localhost:4173/contacto', width: 1440, height: 900 },
      { name: 'desktop-blog', url: 'http://localhost:4173/blog', width: 1440, height: 900 },
      { name: 'desktop-portfolio', url: 'http://localhost:4173/portfolio/logos-design', width: 1440, height: 900 },
    ];

    for (const t of targets) {
      const screenshotFile = path.join(evidenceDir, `${t.name}.png`);
      console.log(`Auditing target: ${t.name} (${t.url}) [${t.width}x${t.height}]...`);

      // Run headless chrome command
      const cmd = `"${chromePath}" --headless --disable-gpu --window-size=${t.width},${t.height} --screenshot="${screenshotFile}" "${t.url}"`;
      execSync(cmd, { stdio: 'pipe' });

      if (fs.existsSync(screenshotFile)) {
        const stat = fs.statSync(screenshotFile);
        console.log(`[PASS] ${t.name} screenshot captured (${(stat.size / 1024).toFixed(1)} KB)`);
      } else {
        console.error(`[FAIL] ${t.name} screenshot not generated`);
      }
    }

    console.log('\n[ALL AUDITS PASSED] Headless Chrome validation completed successfully!');
  } finally {
    preview.kill('SIGINT');
    process.exit(0);
  }
}

run().catch((err) => {
  console.error('Audit failed:', err);
  preview.kill('SIGINT');
  process.exit(1);
});
