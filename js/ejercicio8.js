// 8- Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) 

const numeroUsuario = prompt("Ingrese un número para la pirámide (no mayor de 50):");
const numero = parseInt(numeroUsuario);

if (numero >= 1 && numero <= 50) {
  for (let i = 1; i <= numero; i++) {
    let linea = "";
    for (let b = 1; b <= i; b++) {
      linea += i;
    }
    document.write(linea + "<br>");
  }
} else {
  document.write("Recuerde que el rango del numero es del 1 al 50");
}