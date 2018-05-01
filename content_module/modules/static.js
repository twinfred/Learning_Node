var fs = require('fs');
module.exports = function(){
    return {
        router: function(request, response){
            if(request.url === '/') {
                fs.readFile('./views/index.html', 'utf8', function (errors, contents){
                    response.writeHead(200, {'Content-Type': 'text/html'});
                    response.write(contents);
                    response.end();
                });
            }
            else if(request.url === '/stylesheets/main.css') {
                fs.readFile('./stylesheets/main.css', 'utf8', function (errors, contents){
                    response.writeHead(200, {'Content-Type': 'text/css'});
                    response.write(contents);
                    response.end();
                });
            }
            else if(request.url === '/images/monkey.jpg') {
                fs.readFile('./images/monkey.jpg', function (errors, contents){
                    response.writeHead(200, {'Content-Type': 'image/jpg'});
                    response.write(contents);
                    response.end();
                });
            }
            else {
                response.writeHead(404);
                response.end('File not found!!!');
            }
        }
    }
}