const express = require("express");
const router = express.Router();

const { index, show, deleted } = require("./controllers");

const auth = require("../../../middleware/auth");
const upload = require("../../../middleware/multer");

router.post("/create", upload.single("image"), auth, index);
router.get("/", show);
router.delete("/delete/:id", auth, deleted);

module.exports = router;
