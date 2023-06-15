const jwt = require("jsonwebtoken");
const { generateAccessToken, generateRefreshToken } = require("../utils/auth");

let refreshTokens = [];

const signIn = (req, res) => {
  const { username } = req.body;
  if (username === "") res.sendStatus(400);
  const user = { username };
  const accessToken = generateAccessToken(user);
  const refreshToken = generateRefreshToken(user);
  refreshTokens.push(refreshToken);
  res.json({ accessToken, refreshToken });
};

const signOut = (req, res) => {
  const refreshToken = req.body.token;
  refreshTokens.filter((token) => token !== refreshToken);
  res.sendStatus(204);
};

const refreshToken = (req, res) => {
  const refreshToken = req.body.token;
  if (refreshToken === null) return res.sendStatus(401);
  if (!refreshTokens.includes(refreshToken)) return res.sendStatus(403);

  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    const username = { username: user.username };
    const accessToken = generateAccessToken(username);
    const refreshToken = generateRefreshToken(username);
    res.json({ accessToken, refreshToken });
  });
};

module.exports = {
  signIn,
  signOut,
  refreshToken,
};
