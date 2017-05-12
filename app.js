var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
	fs.readFile('index.html','utf8',function(err,data){
		if(err){
			throw err;
		} else{
			res.writeHead(200, {'Content-Type': 'text/plain'});
		        res.end(data);
		}	
	}); 
}).listen(3000, "127.0.0.1");

console.log('Server running at http://127.0.0.1:3000/');
