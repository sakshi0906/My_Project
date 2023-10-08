const http = require('http');


const message = 'I am happy to study full stack!';

function handler (request, response) {

  response.writeHead(200, {"Content-Type": "text/html"});
  response.write(message); //response body
  response.end(); // finish response
}


const server = http.createServer(handler);

server.listen(3000, function () {

    console.log("Server is listening on port 3000. Ready to accept requests!");
});

