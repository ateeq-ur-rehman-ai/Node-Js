const { Console } = require('console');
const fs= require ('fs');
const http = require('http');

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html')
    console.log(req.url)
    if (req.url == '/') {
        res.statusCode = 200;
        res.end('<h1> We Are Learning backend Development.</h1> <p> Hey this is the way to rock the world!</p>');
    }
    else if (req.url == '/about') {
        res.statusCode = 200;
        res.end('<h1> We Are Learning backend Development.</h1> <p> We Are Learing Backend Through NodeJs And ExpressJs.</p>');
    }
    else if (req.url == '/explore') {
        res.statusCode = 200;
        const data= fs.readFileSync('index.html')
        res.end(data.toString());
    }
    else {
        res.statusCode = 404;
        res.end('<h1> Note Found. <br> Please Try Again.</h1>');
    }

})

server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);

});