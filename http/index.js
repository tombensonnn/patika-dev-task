const http = require('http');

const server = http.createServer((req,res) => {
    const url = req.url;

    if(url === '/'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<h1>INDEX SAYFASI</h1>')
    }
    else if(url === '/hakkimda'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<h1>HAKKIMDA SAYFASI</h1>')
    }
    else if(url === '/iletisim'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<h1>ILETISIM SAYFASI</h1>')
    }
    else if(url === '/xxx'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<h2>HOSGELDINIZ</h2>')
    }
    else{
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.write('<h1>404 NOT FOUND</h1>')
    }

    res.end();
});

const port = 5000;

server.listen(port, () => {
    console.log(`Server opened successfully. Port: ${port}`)
})