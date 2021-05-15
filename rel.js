var a = function a(){
  var port = 8080;
var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('Hello World!'); //write a response to the client
  res.end(); //end the response
});
app.listen(port, function() {
  console.log('Listening on port ' + port);
});
console.log("done"); 

}

module.exports.a = a;
