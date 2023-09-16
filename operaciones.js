const fs = require("fs");

const registrar = (argumentos) => {
  const nuevoAnimal = {
    nombre: argumentos[1],
    edad: argumentos[2],
    animal: argumentos[3],
    color: argumentos[4],
    enfermedad: argumentos[5],
  };

  let animalesJson = [];

  try {
    const animales = fs.readFileSync("citas.json", "utf8");
    animalesJson = JSON.parse(animales);
  } catch (error) {}

  animalesJson.push(nuevoAnimal);

  const data = JSON.stringify(animalesJson);
  fs.writeFileSync("citas.json", data);

  console.log("Cita registrada con éxito.");
};

const leer = () => {
  const animales = fs.readFileSync("citas.json", "utf8");
  const animalesJson = JSON.parse(animales);

  animalesJson.forEach((animal) => console.log(animal));
};

module.exports = { registrar, leer };
