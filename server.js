var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
	console.log(req.url);
	
	if (~req.url.indexOf('.js')) {
		fs.readFile(__dirname + req.url, function (err, data) {
			if (err) console.log(err);
			res.writeHead(200, {'Content-Type': 'text/javascript'});
			res.write(data);
			res.end();
		});
	} else if (~req.url.indexOf('.404')) {
		res.writeHead(404, {'Content-Type': 'text/plain'});
			res.write('Not Found - 404');
			res.end();
	} else if (req.url === '/') {
		var index = fs.readFileSync('index.html');
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.end(index);
	}


}).listen(3000);