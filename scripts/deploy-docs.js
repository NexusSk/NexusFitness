import { execSync } from 'child_process';
import { copyFileSync, mkdirSync, readdirSync, statSync, existsSync, rmSync } from 'fs';
import { join } from 'path';

const distDir = 'dist';
const docsDir = 'docs';

// Remove existing docs folder if it exists
if (existsSync(docsDir)) {
  rmSync(docsDir, { recursive: true, force: true });
}

// Create docs directory
mkdirSync(docsDir, { recursive: true });

// Function to copy files recursively
function copyRecursive(src, dest) {
  const entries = readdirSync(src, { withFileTypes: true });
  
  for (const entry of entries) {
    const srcPath = join(src, entry.name);
    const destPath = join(dest, entry.name);
    
    if (entry.isDirectory()) {
      mkdirSync(destPath, { recursive: true });
      copyRecursive(srcPath, destPath);
    } else {
      copyFileSync(srcPath, destPath);
    }
  }
}

// Copy dist to docs
console.log('Copying dist to docs folder...');
copyRecursive(distDir, docsDir);
console.log('✓ Files copied to docs folder');

// Stage and commit docs folder
console.log('Staging docs folder...');
try {
  execSync('git add docs', { stdio: 'inherit' });
  console.log('✓ Docs folder staged');
  
  console.log('Committing changes...');
  execSync('git commit -m "Deploy to GitHub Pages"', { stdio: 'inherit' });
  console.log('✓ Changes committed');
  
  console.log('Pushing to GitHub...');
  execSync('git push', { stdio: 'inherit' });
  console.log('✓ Pushed to GitHub');
  console.log('\n🎉 Deployment complete!');
  console.log('Your site will be available at: https://nexussk.github.io/NexusFitness/');
} catch (error) {
  console.error('\n⚠️  Error during git operations. Please commit and push manually:');
  console.error('   git add docs');
  console.error('   git commit -m "Deploy to GitHub Pages"');
  console.error('   git push');
}



