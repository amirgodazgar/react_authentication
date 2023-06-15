require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
// const authentication = require("./routes/auth");
// const getList = require("./routes/list");
// const baseUrl = "/api/v1";

// app can use json --------------------------------
app.use(express.json());

// cors policies -----------------------------------
app.use(
  cors({
    origin: "*",
  })
);

// Authentication ----------------------------------------------------------------
// app.use(`${baseUrl}/account`, authentication);

// get list ----------------------------------------------------------------
// app.use(baseUrl, getList);

app.get("/list", (req, res) => {
  res.json("hello world");
});

// const port = process.env.PORT || 4000;
const port = 4000;
app.listen(port);
