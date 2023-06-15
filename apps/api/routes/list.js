const express = require("express");
const router = express.Router();
const authenticateToken = require("../middleware/auth");

const list = [
  { username: "Amir", job: "developer" },
  { username: "Bob", job: "devOps" },
];

router.get("/list", authenticateToken, (req, res) => {
  res.json(list.filter((i) => i.username === req.user.username));
});

module.exports = router;
