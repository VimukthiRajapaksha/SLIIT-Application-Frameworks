const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type' : 'text/html; charset=utf-8'});

    switch (req.method) {
        case 'GET' :
            res.write('<h1>This is a get request</h1>');
            res.end();
            break;
        case 'POST' :
            req.on('data', data => {
                res.write('<div><h1>This is a post request</h1><br /> <p>data::' + data + '</p></div>');
                res.end();
            });
            break;
    }
});
server.listen(3000);