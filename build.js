#!/usr/bin/env node
// build.js — Copia src/ → public/ (sin bundler, ES modules nativos)

const fs   = require('fs');
const path = require('path');

const SRC    = path.join(__dirname, 'src');
const PUBLIC = path.join(__dirname, 'public');

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function copyDir(src, dest) {
  ensureDir(dest);
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const srcPath  = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// Limpiar public/ (excepto node_modules si hubiera)
if (fs.existsSync(PUBLIC)) {
  fs.rmSync(PUBLIC, { recursive: true, force: true });
}

// Copiar estructura src/ → public/
// index.html va en raíz de public/
ensureDir(PUBLIC);
fs.copyFileSync(path.join(SRC, 'index.html'), path.join(PUBLIC, 'index.html'));
copyDir(path.join(SRC, 'css'), path.join(PUBLIC, 'css'));
copyDir(path.join(SRC, 'js'),  path.join(PUBLIC, 'js'));

console.log('✓  Build completado → public/');
console.log('   Ejecutá: npm start');
