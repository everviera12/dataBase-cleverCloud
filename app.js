const express = require("express");
const app = express();
const conexion = require("./db");


app.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000");
});
