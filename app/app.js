const express = require("express");
const favicon = require("serve-favicon");
const consolidate = require("consolidate");
const path = require("path");

const app = express();

app.engine("html", consolidate.ejs);
app.set("view engine", "html");
app.use(express.static("public"));
app.set("views", path.join(__dirname, "/public/html"));
//app.use(favicon(path.join(__dirname, "public/images", "favicon.ico")));
app.use(require("./middleware/middleware"));

app.get("/", (req, res) => {
    res.render("index");
});

module.exports = app;