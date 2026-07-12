const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '..', 'src');
const stylesDir = path.join(srcDir, 'styles');

function walkDir(dir) {
  let files = [];
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      files = files.concat(walkDir(fullPath));
    } else if (file.endsWith('.scss')) {
      files.push(fullPath);
    }
  }
  return files;
}

const scssFiles = walkDir(srcDir);

for (const file of scssFiles) {
  // Skip the styles directory itself
  if (file.startsWith(stylesDir)) continue;

  const content = fs.readFileSync(file, 'utf8');
  let newContent = content;

  // Calculate relative path from this file to src/styles
  const fileDir = path.dirname(file);
  let relPath = path.relative(fileDir, stylesDir);
  if (!relPath.startsWith('.')) relPath = './' + relPath;

  // Replace @use 'variables' and @use '@/styles/variables'
  newContent = newContent.replace(/@use\s+['"](?:@\/styles\/)?variables['"]/g, `@use '${relPath}/variables'`);
  newContent = newContent.replace(/@use\s+['"](?:@\/styles\/)?mixins['"]/g, `@use '${relPath}/mixins'`);

  if (content !== newContent) {
    fs.writeFileSync(file, newContent, 'utf8');
    console.log(`Updated ${file}`);
  }
}
