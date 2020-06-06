const express = require("express");
var router = express.Router();

router.use((req, res, next) => {
    if (!req.secure) res.redirect("https://" + req.headers.host + req.url);
    else next();
});

module.exports = router;