require("./database");
require("dotenv").config();

const express = require("express");
const routes = require("./routes");
const swaggerUi = require("swagger-ui-express");
const swaggetDocs = require("./swagger.json");

const app = express();

app.use(express.json());
app.use("/api", routes);
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggetDocs));

const PORT = process.env.PORT || 5000;

app.listen(PORT);
