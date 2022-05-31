/*8- Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) 

1
12
123
1234
12345
123456
……
*/

let n = parseInt(prompt("Ingrese un numero entre 1 y 50"));

if (n < 1 || n > 50);
else {
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            document.write(j);
        }
        document.write("<br>");
    }
}