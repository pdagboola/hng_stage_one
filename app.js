require("dotenv").config();
const express = require("express");
const indexRoute = require("./routes/index");
const PORT = process.env.PORT || 3030;

const app = express();

app.use("/", indexRoute);

app.listen(PORT, console.log(`Your app is now running on ${PORT}`));
