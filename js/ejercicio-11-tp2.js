/*Ejercicios con Math
11- Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. *
Nota: ver funcion Math() https://www.w3schools.com/js/js_math.asp */

let edad2=0;
let Mayor="";

for (let index=1; index<=3; index++)
{
    let edad = parseInt(prompt("Ingrese edad . "+index));
    let nombre = prompt("Ingrese el nombre . "+index);
    document.write(nombre+' tiene '+edad+ ' años <br>');
    if (edad>edadMayor)
    {
        edad2 = edad;
        Mayor = nombre;
    }
}

document.write("El mayor es: "+Mayor)