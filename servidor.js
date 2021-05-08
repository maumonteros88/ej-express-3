const express = require("express");
const app = express();
const path = require("path");

const port = 3000;
const image = "programar.jpg";
const index = "index.html";

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, index));
});

app.get("/foto", (req, res) => {
  res.sendFile(path.join(__dirname, image));
});

app.get("/saludo", (req, res) => {
  res.send("HOLAAA");
});

app.listen(port, () => {
  console.log("Servidor corriendo...");
});
