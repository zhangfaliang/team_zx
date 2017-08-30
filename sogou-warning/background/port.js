let PORT = 3000;
const http = require("http");
const path = require("path");
const fs = require("fs");

var server = http.createServer(function(req,res){

    let pathname = url.parse(req.url).pathname;
    let realPath = path.join("assets",pathname);


});
server.listen(PORT);
console.log("Server runing at port: " + PORT + ".");