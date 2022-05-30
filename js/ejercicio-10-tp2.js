/*10- Realiza un script que pida número de filas y columnas y escriba una tabla. Dentro de cada una de las celdas deberá escribirse un número consecutivo en orden descendente. Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.*/

let filas = parseInt(prompt('ingrese una cantidad de filas'));
let columnas = parseInt(prompt('ingrese una cantidad de columnas'));

let resultado = filas * columnas;
console.log(resultado);

document.write(`<table> <tbody>`);
// aqui dibujo las filas y las celdas
for (let indicefila=0; indicefila < filas; indicefila++) {
    //aqui dibujo las filas
    document.write('<tr>')
    //hora dibujo la celdas
    for(let indicecolumna=0; indicecolumna < columnas; indicecolumna++){
        document.write(`<td>${resultado}</td>`);
        resultado--;
    }
    document.write('</tr>')
}
document.write(`</tbody> </table>`);


//document.write(`<table>
//<tbody>
//<tr>
//<td>1</td>
//<td>2</td>
//<td>3</td>
//</tr>
//<tr>
//<td>1</td>
//<td>2</td>
//<td>3</td>
//</tr>
//</tbody>
//</table>`);