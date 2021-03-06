// http is an internal `node.js` module / package. It gives the ability to respond to http requests
const http = require("http");

const server = http.createServer((request, response) => {
  console.log("Request url:", request.url);
  console.log("Type of request: ", request.method);

  if (request.url === "/") {
    console.log("This is the home page");
    //  Adds a `header` - an extra piece of information for the browser to interpret and decide what to present to the user
    response.setHeader("Content-Type", "text/html");
    //  response.write sends back what it should write to the html packe
    response.write("<h1>This is the home page</h1>");
  } else {
    response.write(`<h1>This is every other page</h1>`);
  }
  //   officially ends the response cycle
  response.end();
});

// sets the server port on 3001. Locally this is http://localhost:3001
server.listen(3001, () => {
  console.log(`Server Listening on port 3001`);
});
