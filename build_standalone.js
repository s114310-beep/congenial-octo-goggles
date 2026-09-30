const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

// Inline CSS
const css = fs.readFileSync('css/style.css', 'utf8');
html = html.replace('<link rel="stylesheet" href="css/style.css">', `<style>\n${css}\n</style>`);

// Read JS files
const threeJs = fs.readFileSync('lib/three.min.js', 'utf8');
const audioJs = fs.readFileSync('js/audio.js', 'utf8');
const modelsJs = fs.readFileSync('js/models.js', 'utf8');
const levelsJs = fs.readFileSync('js/levels.js', 'utf8');
const gameJs = fs.readFileSync('js/game.js', 'utf8');
const mainJs = fs.readFileSync('js/main.js', 'utf8');

const combinedScript = `<script>\n${threeJs}\n\n${audioJs}\n\n${modelsJs}\n\n${levelsJs}\n\n${gameJs}\n\n${mainJs}\n</script>`;

// Replace external script tags with combined inline script
html = html.replace(/<script src="lib\/three\.min\.js"><\/script>[\s\S]*<script src="js\/main\.js"><\/script>/, combinedScript);

fs.writeFileSync('game_standalone.html', html, 'utf8');
console.log('Successfully created game_standalone.html, file size:', html.length, 'bytes');
