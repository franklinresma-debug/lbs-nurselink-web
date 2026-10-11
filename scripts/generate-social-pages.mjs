import fs from 'fs';
import path from 'path';

const dist = path.resolve('dist');
const indexPath = path.join(dist, 'index.html');

if (!fs.existsSync(indexPath)) {
  console.error('ERROR: dist/index.html not found');
  process.exit(1);
}

const base = fs.readFileSync(indexPath, 'utf8');

const register = base;

const login = base
  .replace(
    '<meta property="og:title" content="Join LBS NURSELINK MEDICAL SERVICES DIVISION" />',
    '<meta property="og:title" content="Sign in to LBS NURSELINK MEDICAL SERVICES DIVISION" />'
  )
  .replace(
    '<meta property="og:url" content="https://lbs.amsertech.com/register" />',
    '<meta property="og:url" content="https://lbs.amsertech.com/login" />'
  )
  .replace(
    '<meta name="twitter:title" content="Join LBS NURSELINK MEDICAL SERVICES DIVISION" />',
    '<meta name="twitter:title" content="Sign in to LBS NURSELINK MEDICAL SERVICES DIVISION" />'
  );

fs.writeFileSync(path.join(dist, 'register-social.html'), register);
fs.writeFileSync(path.join(dist, 'login-social.html'), login);

console.log('SUCCESS: social route HTML files generated.');

await import('./generate-offline-assets.mjs');
