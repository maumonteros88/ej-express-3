const express = require("express");
const app = express();
const path = require("path");

const port = 3000;
const dirImagen = path.join(__dirname, "programar.jpg");
const dirIndex = path.join(__dirname, "index.html");

app.get("/", (req, res) => {
  res.sendFile(dirIndex);
});

app.get("/foto", (req, res) => {
  res.sendFile(dirImagen);
});

app.get("/saludo", (req, res) => {
  res.send("HOLAAA");
});

app.listen(port, () => {
  console.log("Servidor corriendo...");
});
