/*3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

Nota: usar confirm() https://www.w3schools.com/jsref/met_win_confirm.asp*/


let concatenar;
let texto = prompt("Escriba una cadena de texto para salir selecione cancelar");

for (let i = 0, j = 0; texto != null; i++) {
  if (i == 0) {
    concatenar = texto;
  } else {
    texto = prompt("Escriba una cadena de texto para salir selecione cancelar");
    if (texto != null) {
      concatenar = concatenar + "-" + texto;
    }
  }
}

document.write(concatenar);

