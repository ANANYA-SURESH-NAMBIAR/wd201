const http = require("http");
const fs = require("fs");

let homeContent = "";
let regisContent = "";
let projectContent = "";
const minimist = require("minimist");
const args = minimist(process.argv.slice(2));
const portNum = parseInt(args.port);
/*
fs.readFile("home.html", (err, home) => {
  if (err) {
    throw err;
  }
  homeContent = home;
});
*/
try {
  regisContent = fs.readFileSync("registration.html", "utf8");
} catch (err) {
  console.error("Error reading registration.html:", err);
}
try {
  projectContent = fs.readFileSync("project.html", "utf8");
} catch (err) {
  console.error("Error reading project.html:", err);
}
try {
  homeContent = fs.readFileSync("home.html", "utf8");
} catch (err) {
  console.error("Error reading home.html:", err);
}
/*
http
  .createServer((request, response) => {
    let url = request.url;
    response.writeHeader(200, { "Content-Type": "text/html" });
    switch (url) {
      case "/project":
        response.write(projectContent);
        response.end();
        break;
      default:
        response.write(homeContent);
        response.end();
        break;
    }
  })
  .listen(3000);
*/
http
  .createServer((request, response) => {
    let url = request.url;
    response.writeHeader(200, { "Content-Type": "text/html" });
    switch (url) {
      case "/registration":
        response.write(regisContent);
        response.end();
        break;
      case "/project":
        response.write(projectContent);
        response.end();
        break;
      default:
        response.write(homeContent);
        response.end();
    }
  })
  .listen(portNum);
