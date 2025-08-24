const fs = require('fs');

// Leer el archivo index.html
const html = fs.readFileSync('index.html', 'utf8');

// Verificar que contenga "Hola Mundo"
if (html.includes('Hola Mundo desde DevOps!')) {
    console.log('Prueba pasada: el contenido existe ✅');
    process.exit(0);
} else {
    console.log('Prueba fallida: el contenido NO existe ❌');
    process.exit(1);
}
