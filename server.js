require("dotenv").config();

//Native modules

const fs = require("fs");

//Custom modules

const app = require("./app/app");
const mongodb = require("./libs/mongodb").connect();

var httpsOptions = {
    key: fs.readFileSync('./ssl/certs/server.key'),
    cert: fs.readFileSync('./ssl/certs/server.crt')
};

const httpServer = require("http").createServer(app);
const httpsServer = require("https").createServer(httpsOptions, app);

httpServer.listen(process.env.HTTP_PORT, () => {
    console.log("HTTP Server listening in port " + process.env.HTTP_PORT + "...");
});
httpsServer.listen(process.env.HTTPS_PORT, () => {
    console.log("HTTPS Server listening in port " + process.env.HTTPS_PORT + "...");
});