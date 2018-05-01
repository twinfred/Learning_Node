var http = require('http');
var static_contents = require('./modules/static.js')();
console.log(static_contents)
var server = http.createServer(function (request, response){
    console.log('client request URL: ', request.url);
    static_contents.router(request, response);
});
server.listen(2248);
console.log("Running in localhost at port 2248");