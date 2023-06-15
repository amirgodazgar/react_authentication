const express = require("express");
const router = express.Router();
const { refreshToken, signOut, signIn } = require("../controllers/auth");

router.post("/refresh-token", refreshToken);
router.post("/sign-in", signIn);
router.delete("/sign-out", signOut);

module.exports = router;
