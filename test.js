var http = require('http');
var fs = require('fs');
var port = 80;
var ipAddress = '0.0.0.0';

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  /*fs.readdir('./nodejstestfiles', (err, files) => {
  files.forEach(file => {
    console.log(file);
  });
})*/
  fs.open('./index.html', 'w', function (err, file) {
    if (err) throw err;
    console.log('Saved!');
    res.write(file);
  });

  res.end();
}).listen(port, ipAddress, function() {
    console.log('Listening to port:  ' + port);
    });
