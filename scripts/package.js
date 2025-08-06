const fs = require('fs-extra');
const path = require('path');

// Define source and destination directories
const srcDir = __dirname + '/..';
const distDir = srcDir + '/dist';

// Files and directories to include in production build
const includePaths = [
  'blocks/',
  'build/blocks/', // We'll copy the build output, not the src
  'patterns/',
  'templates/',
  'functions.php',
  'style.css',
  'theme.json',
  'screenshot.png' // If you have a theme screenshot
];

// Files and directories to exclude (for safety)
const excludePaths = [
  'src/',
  'node_modules/',
  'scripts/',
  'webpack.config.js',
  'webpack.prod.js',
  '.git/',
  '.gitignore',
  'package.json',
  'package-lock.json'
];

async function createProductionPackage() {
  try {
    // Clean dist directory
    await fs.remove(distDir);
    await fs.ensureDir(distDir);
    
    console.log('Creating production package...');
    
    // Copy required files and directories
    for (const includePath of includePaths) {
      const srcPath = path.join(srcDir, includePath);
      const destPath = path.join(distDir, includePath);
      
      if (await fs.pathExists(srcPath)) {
        await fs.copy(srcPath, destPath);
        console.log(`Copied ${includePath}`);
      }
    }
    
    // Copy root level files
    const rootFiles = ['functions.php', 'style.css', 'theme.json'];
    for (const file of rootFiles) {
      const srcPath = path.join(srcDir, file);
      const destPath = path.join(distDir, file);
      
      if (await fs.pathExists(srcPath)) {
        await fs.copy(srcPath, destPath);
        console.log(`Copied ${file}`);
      }
    }
    
    console.log('Production package created successfully in dist/');
  } catch (error) {
    console.error('Error creating production package:', error);
    process.exit(1);
  }
}

createProductionPackage();
