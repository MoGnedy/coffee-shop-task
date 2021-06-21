"use strict";
const express = require("express");
const { coffeeMachinesRoutes, coffeePodsRoutes } = require("./routes/v1");

// Set up the express app
const app = express();
// Log requests to the console.
if (process.env == "development") {
  const logger = require("morgan");
  app.use(logger("dev"));
}

const PORT = parseInt(process.env.PORT, 10) || 3000;
app.set("port", PORT);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => res.sendStatus(200));
app.use("/api/v1/coffee-machines", coffeeMachinesRoutes);
app.use("/api/v1/coffee-pods", coffeePodsRoutes);

module.exports = app;
