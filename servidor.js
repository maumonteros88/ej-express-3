const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/saludo", (req, res) => {
  res.send('HOLAAA')
});

app.get("/foto", (req, res) => {
  res.sendFile(path.join(__dirname,"programar.jpg"))
});

app.listen(port, () => {
  console.log("Servidor corriendo...");
});
