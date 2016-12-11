var http = require('http');
var port = 8080;

function handleRequest(request, response) {
	response.end('It Works! Path hit: ' + request.url);
}

var server = http.createServer(handleRequest);

server.listen(PORT, function(){
	console.log('server listening on: http://localhosts:%s', PORT);
});