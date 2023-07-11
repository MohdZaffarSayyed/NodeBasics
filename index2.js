const http = require('http');


http.createServer((req, res) => {
    res.write("<H1>Hello This is Zaffar</H1>");
    res.end();
}).listen(4500);