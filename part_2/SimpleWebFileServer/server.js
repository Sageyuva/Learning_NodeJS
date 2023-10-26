/*
Creating a basic server
*/

var http = require('http');
var fs = require('fs')

// Eror 404 ---  Sending RESPONSE

const send404Response = (res) => {
    res.writeHead(404, { "Content-Type": "text/html" });
    fs.createReadStream("./Error.html").pipe(res);
}

// Handling a request
const OnReqS = (req, res) => {
    if (req.method == 'GET' && req.url == '/') {
        res.writeHead(200, { "Content-Type": "text/html" });
        fs.createReadStream("./index.html").pipe(res);
    } else {
        send404Response(res);
    }
}


/* Creating a server which listens on port 8080 localhost */

http.createServer(OnReqS).listen(8080);
console.log("Server is runnig")