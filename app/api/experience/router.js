const express = require("express");
const router = express.Router();

const { index, show, deleted } = require("./controllers");

const auth = require("../../../middleware/auth");

router.post("/create", auth, index);
router.get("/", show);
router.delete("/delete/:id", auth, deleted);

module.exports = router;
