const http = require("http");
const fs = require("fs");
const path = require("path");
const dirPath = path.join(__dirname, "/templates");
const file2Send = fs.readFileSync(`${dirPath}/page.html`);
const server = http.createServer(function (req, res) {
  console.log(req);
  res.setHeader("Content-Type", "text/html");
  res.end(file2Send);
});

server.listen(3000);
console.log("Node.js web server at port 3000 is running..");


const obj = { name: "John", age: 30, city: "New York" };
const jsonString = JSON.stringify(obj);
console.log(jsonString); // {"name":"John","age":30,"city":"New York"}

