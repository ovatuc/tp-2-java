/*5- Realizar una página con un script que calcule el valor de la letra de un número de DNI (Documento nacional de identidad).

El algoritmo para calcular la letra del dni es el siguiente :

El número debe ser entre 0 y 99999999
Debemos calcular el resto de la división entera entre el número y el número 23.
Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:  (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E) 
Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar.
Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».*/

let dni = null;
let letra = "TRWAGMYFPDXBNJZSQVHLCKE";

do {
    dni = prompt("Ingrese su DNI");
    if (dni!=null)
    {
        dni=parseInt(dni);
        if (isNaN(dni))
            alert("ingrese un valor númerico");
        else if (dni<0 || dni>99999999)
            alert("Ingrese un valor entre 0 y 99999999");
        else{
            let index = dni % 23;
            alert(dni + ' corresponde a la letra ' + letra [index])
        }
    }
 
} while (dni!=null)

