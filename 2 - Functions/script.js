// EJERCICIO: Array y IF ELSE IF
// let rangoNumero = [10, 20, 30, 40];
// let numero;

// numero = prompt('Dime un numero del 0 al 100:');

// if (numero == rangoNumero[0]) {
//     console.log(`El número que has elegido es ${numero}.`);
// } else if (numero == rangoNumero[1]) {
//     console.log(`El número que has elegido es ${numero}.`);
// } else if (numero == rangoNumero[2]) {
//     console.log(`El número que has elegido es ${numero}.`);
// } else if (numero == rangoNumero[3]) {
//     console.log(`El número que has elegido es ${numero}.`);
// } else if (numero < rangoNumero[0]) {
//     console.log(`${numero} es menor que ${rangoNumero[0]}.`);
// } else if (numero >= rangoNumero[0] && numero < rangoNumero[1]) {
//     console.log(`${numero} es mayor que ${rangoNumero[0]}, pero más pequeño que ${rangoNumero[1]}.`);
// } else if (numero >= rangoNumero[1] && numero < rangoNumero[2]) {
//     console.log(`${numero} es mayor que ${rangoNumero[1]}, pero más pequeño que ${rangoNumero[2]}.`);
// } else if (numero >= rangoNumero[2] && numero < rangoNumero[3]) {
//     console.log(`${numero} es mayor que ${rangoNumero[2]}, pero más pequeño que ${rangoNumero[3]}.`)
// } else {
//     console.log(`${numero} es mayor que ${rangoNumero[3]}.`)
// }


// EJERCICIO: Array y SWITCH
let rangoNum = [10, 20, 30, 40];
let num = 45;

num = prompt('Dime un número:');

switch (true) {
    case (num < 0):
        console.log(`Tu número es: ${num}\n<Por lo tanto es negativo>`);
        break;
    case (num >= 0 && num < rangoNum[0]):
        console.log(`Tu numero es: ${num}\n<Por lo que es igual o mayor que 0 y menor que ${rangoNum[0]}> `);
        break;
    case (num >= rangoNum[0] && num < rangoNum[1]):
        console.log(`Tu numero es: ${num}\n<Por lo que es igual o mayor que ${rangoNum[0]} y menor que ${rangoNum[1]}>`);
        break;
    case (num >= rangoNum[1] && num < rangoNum[2]):
        console.log(`Tu numero es: ${num}\n<Por lo que es igual o mayor que ${rangoNum[1]} y menor que ${rangoNum[2]}>`);
        break;
    case (num >= rangoNum[2] && num < rangoNum[3]):
        console.log(`Tu numero es: ${num}\n<Por lo que es igual o mayor que ${rangoNum[2]} y menor que ${rangoNum[3]}>`);
        break;
    default:
        console.log(`Tu numero es: ${num}\n<Por lo que es igual o mayor que ${rangoNum[3]}>`);
        break;
}

