// scripts/obfuscate.js
const JavaScriptObfuscator = require('javascript-obfuscator');
const fs = require('fs');
const path = require('path');

// Update paths to use assets directory
const INPUT_DIR = 'assets/js/src';     // Source JS files
const OUTPUT_DIR = 'assets/js';         // Obfuscated output

// Obfuscator configuration
const config = {
    compact: true,
    controlFlowFlattening: true,
    controlFlowFlatteningThreshold: 0.75,
    deadCodeInjection: true,
    deadCodeInjectionThreshold: 0.4,
    debugProtection: false,
    disableConsoleOutput: true,
    identifierNamesGenerator: 'hexadecimal',
    renameGlobals: false,
    rotateStringArray: true,
    selfDefending: true,
    stringArray: true,
    stringArrayEncoding: ['base64'],
    stringArrayThreshold: 0.75,
    transformObjectKeys: true,
    unicodeEscapeSequence: false
};

// Make sure output path exists
if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// Process files
fs.readdirSync(INPUT_DIR)
    .filter(file => file.endsWith('.js'))
    .forEach(file => {
        console.log(`Processing ${file}`);
        console.log(`Path: ${path.join(INPUT_DIR, file)}`);
        const inputPath = path.join(INPUT_DIR, file);
        const outputPath = path.join(OUTPUT_DIR, file.replace('.js', '.min.js'));

        const code = fs.readFileSync(inputPath, 'utf8');
        const obfuscatedCode = JavaScriptObfuscator.obfuscate(code, config);

        fs.writeFileSync(outputPath, obfuscatedCode.getObfuscatedCode());
        console.log(`Obfuscated ${file} -> ${outputPath}`);
    });