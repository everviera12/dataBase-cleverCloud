const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "",
  user: "upskolvrj3g87eqf",
  password: "PYIAa9VdqFdbcdDEA29w",
  database: "b7jn5pqkpyxigdcgmbwl",
});

// mensaje de error y conexion a la base de datos
connection.connect((error) => {
  if (error) {
    console.log("Error en la conexión a la base de datos: " + error);
    return;
  }
  console.log("Conectado a la base de datos");
});

// Realizar consulta para obtener los datos
connection.query("SELECT * FROM usuarios", (error, results) => {
  if (error) {
    console.log("ERROR AL EJECUTAR LA CONSULTA: " + error);
    return;
  } else {
    // Muestra los datos en la terminal
    console.log("Los datos son: ");
    results.forEach((row) => {
      console.log(row);
    });

    // Cerrar la conexión
    connection.end();
  }
});

module.exports = connection;
