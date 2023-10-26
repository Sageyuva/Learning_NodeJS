var connect = require('connect');
var http = require('http');

var app = connect();

const doFirst = (req, res, next) => {
    console.log("Calling dofirst")
}

app.use(doFirst);

http.createServer(app).listen(8088);
console.log("Server is running")