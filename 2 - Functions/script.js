// Define una función que calcule la suma de los primeros números naturales de N.
// Ejemplo:
//     N=3
//     Resultado: 3+2+1 = 6
const printPrimeros = (N) => {
    let num = N;
    for (let i = N; i > 0; i--) {
        if (N > 1) {
            document.write(`${N} + `);
        } else {
            document.write(`${N} = ${sumaPrimeros(num)}<br>`);
        }
        N--;
    }
};

const sumaPrimeros = (N) => {
    let sum = 0;
    for (let i = N; i >= 1; i--) {
        sum = sum + N;
        N--;
    }
    return sum;
};

let num = 5, numFilas = 4, i = 0;
do {
    console.log(printPrimeros(num));
    i++;
    num++;
} while (i < numFilas);