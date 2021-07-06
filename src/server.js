const express = require("express");
const routes = require("./routes");
require("./database");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(routes);

const PORT = process.env.PORT || 5000;

app.listen(PORT);
