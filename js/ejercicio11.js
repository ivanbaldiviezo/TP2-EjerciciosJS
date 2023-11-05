const nombre1 = prompt("Ingrese el primer nombre:");
const edad1 = parseInt(prompt(`Ingrese la edad de ${nombre1}:`));

const nombre2 = prompt("Ingrese el segundo nombre:");
const edad2 = parseInt(prompt(`Ingrese la edad de ${nombre2}:`));

const nombre3 = prompt("Ingrese el tercer nombre:");
const edad3 = parseInt(prompt(`Ingrese la edad de ${nombre3}:`));

const edadMayor = Math.max(edad1, edad2, edad3);

if (edadMayor === edad1) {
  document.write(`El mayor es ${nombre1} con ${edad1} años.`);
} else if (edadMayor === edad2) {
  document.write(`El mayor es ${nombre2} con ${edad2} años.`);
} else {
  document.write(`El mayor es ${nombre3} con ${edad3} años.`);
}
