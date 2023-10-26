/*
Creating a basic server
*/

var http = require('http');


//Sending a callback function

const OnReqS = (req, res) => {
    console.log(req.url);
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("Here is somedata");
    res.end();
}


/* Creating a server which listens on port 8080 localhost */

http.createServer(OnReqS).listen(8080);
console.log("Server is runnig")