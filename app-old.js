const http = require('http');


http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });

    let salida = {
        nombre: 'Andrés Espinoza',
        edad: 44,
        url: res.url
    };

    res.write(JSON.stringify(salida));
    res.end();

}).listen(8080);

console.log("Escuchando puerto 8080");