import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SRC_DIR = path.join(__dirname, '../src');

// Walk directory recursively
function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else {
      results.push(file);
    }
  });
  return results;
}

const allFiles = walk(SRC_DIR);
let hasError = false;

allFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const lines = content.split('\n');
  const ext = path.extname(file);
  const relativePath = path.relative(process.cwd(), file);

  // 1. Check file length (max 200 lines) for TS/TSX/SCSS
  if (['.ts', '.tsx', '.scss'].includes(ext)) {
    if (lines.length > 200) {
      console.error(`❌ [CONVENTION ERROR] ${relativePath} exceeds 200 lines (${lines.length} lines). Break it down.`);
      hasError = true;
    }
  }

  // 2. Check for lint suppressions
  if (content.match(/eslint-disable|@ts-ignore|@ts-expect-error|@ts-nocheck/)) {
    console.error(`❌ [CONVENTION ERROR] ${relativePath} contains lint suppressions. Fix the root cause instead.`);
    hasError = true;
  }

  // 3. Check for hardcoded hex colors in SCSS modules
  if (file.endsWith('.module.scss')) {
    if (content.match(/#[0-9a-fA-F]{3,8}/)) {
      console.error(`❌ [CONVENTION ERROR] ${relativePath} contains hardcoded hex colors. Use CSS custom properties or SCSS variables.`);
      hasError = true;
    }
  }

  // 4. Check for inline styles in TSX
  if (ext === '.tsx') {
    if (content.match(/style=\{\{/)) {
      console.error(`❌ [CONVENTION ERROR] ${relativePath} contains inline styles. Use SCSS modules unless dynamic.`);
      hasError = true;
    }
  }
});

if (hasError) {
  console.error('\n🚨 Convention checks failed. Please fix the above errors.');
  console.error('Run `pnpm format` to auto-fix styling issues, and `pnpm verify` to re-check.');
  process.exit(1);
} else {
  console.log('✅ All convention checks passed.');
}
