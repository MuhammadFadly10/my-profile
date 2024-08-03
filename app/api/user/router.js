const express = require("express");
const router = express.Router();

const { index } = require("./controllers");

router.post("/login", index);

module.exports = router;
