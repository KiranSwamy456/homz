const fs = require('fs');
const path = require('path');

const directoriesToScan = ['app', 'components', 'lib'];
const publicDir = path.join(__dirname, 'public');

const imageRegex = /["'](\/images\/[^"']+\.(png|jpg|jpeg|webp|svg|gif))["']/g;

function scanDirectory(dir) {
  let results = [];
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      results = results.concat(scanDirectory(fullPath));
    } else if (fullPath.endsWith('.ts') || fullPath.endsWith('.tsx')) {
      const content = fs.readFileSync(fullPath, 'utf-8');
      let match;
      while ((match = imageRegex.exec(content)) !== null) {
        results.push({ file: fullPath, imagePath: match[1] });
      }
    }
  }
  return results;
}

const allImageRefs = [];
directoriesToScan.forEach((dir) => {
  const fullDirPath = path.join(__dirname, dir);
  if (fs.existsSync(fullDirPath)) {
    allImageRefs.push(...scanDirectory(fullDirPath));
  }
});

const brokenImages = [];
const uniqueBroken = new Set();

allImageRefs.forEach((ref) => {
  const absoluteImagePath = path.join(__dirname, 'public', ref.imagePath);
  if (!fs.existsSync(absoluteImagePath)) {
    const key = `${ref.imagePath} in ${ref.file}`;
    if (!uniqueBroken.has(key)) {
      uniqueBroken.add(key);
      brokenImages.push(ref);
    }
  }
});

if (brokenImages.length === 0) {
  console.log("SUCCESS: No broken images found in the codebase!");
} else {
  console.log(`FOUND ${brokenImages.length} BROKEN IMAGE REFERENCES:`);
  brokenImages.forEach((b) => {
    console.log(`- ${b.imagePath} (Found in: ${b.file})`);
  });
}
