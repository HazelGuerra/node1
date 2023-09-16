const { registrar, leer } = require("./operaciones");

const argumentos = process.argv.slice(2);

if (argumentos[0] === "registrar") {
  registrar(argumentos);
} else if (argumentos[0] === "leer") {
  leer();
} else {
  console.log("operacion invalida");
}
