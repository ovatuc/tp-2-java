/*14- Realiza un script que pida una cadena de texto y lo muestre poniendo el signo – entre cada carácter sin usar el método replace. Por ejemplo, si tecleo “hola qué tal”, deberá salir “h-o-l-a- -q-u-e- -t-a-l”. */

let texto= prompt('ingrese una cadena de texto');
for (let i=0; i<texto.length-1; i++)
{
    document.write(texto[i]+'-');
}
document.write(texto[texto.length-1])