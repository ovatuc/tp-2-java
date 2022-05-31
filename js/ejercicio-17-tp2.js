/* 17- Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado. */
let text = prompt('ingrese un texto');

document.write(`${text}<br>`)
text = text.toLocaleLowerCase();

for (let i=0; i<text.length; i++)
{
    if (text[i] == 'a' || text[i] == 'e' || text[i] == 'i' || text[i] == 'o' || text[i] == 'u')
    {
        document.write(`la primer vocal está en la posición ${i}`);
        break;
    }
}