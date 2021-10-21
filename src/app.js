require("./database");
require("dotenv").config();

const express = require("express");
const cors = require("cors");
const routes = require("./routes");
const swaggerUi = require("swagger-ui-express");
const swaggetDocs = require("./swagger.json");

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggetDocs));

module.exports = app;
