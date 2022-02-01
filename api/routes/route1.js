const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("info from initial route");
});

module.exports = router;
