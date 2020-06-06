const express = require("express");
var router = express.Router();

router.use(require("./security"));

module.exports = router;