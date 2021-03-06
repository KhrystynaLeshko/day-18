const http = require("http");

const server = http.createServer((request, response) => {
  console.log("Request url:", request.url);
  console.log("Type of request: ", request.method);

  if (request.url === "/") {
    response.write(`<h1>Welcome to the jungle</h1>`);
  }

  if (request.url === "/about") {
    response.write(`<h2>Welcome to the about page</h2>`);
  }

  response.end();
});

server.listen(5500, () => {
  console.log(`SERVER RUNNING ON 5500`);
});
