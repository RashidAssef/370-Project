import fs from 'fs';
import path from 'path';

function fixFile(filePath: string) {
  let content = fs.readFileSync(filePath, 'utf8');
  content = content.replace(/\{\\\`/g, '{`');
  content = content.replace(/\\\`\}/g, '`}');
  content = content.replace(/\\\`/g, '`');
  fs.writeFileSync(filePath, content);
}

const dirs = ['./src/pages', './src/layouts', './src/components'];
dirs.forEach(dir => {
  if (fs.existsSync(dir)) {
    fs.readdirSync(dir).forEach(file => {
      if (file.endsWith('.tsx')) {
        fixFile(path.join(dir, file));
      }
    });
  }
});
console.log('Fixed backticks.');
