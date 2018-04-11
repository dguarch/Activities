// Define una función que calcule la suma de los primeros números naturales de N.
// Ejemplo:
//     N=3
//     Resultado: 3+2+1 = 6

//Función que imprime por pantalla los numerillos
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

//Función para calcular la suma
const sumaPrimeros = (N) => {
    let sum = 0;
    for (let i = N; i >= 1; i--) {
        sum += N; // sum = sum + N;
        N--;
    }
    return sum;
};

let num = 5, numFilas = 10, i = 0;
do {
    printPrimeros(num);
    i++;
    num++;
} while (i < numFilas);



// -------------------------------------------------------------
// calcula el numero de pares dados
const nPares = (N) => {
    let sum = 0;
    for (let i = N; i <= N * 2; i += 2) {
        sum += i; // sum = sum + N;
    }
    return sum;
};
console.log(nPares(0));
console.log(nPares(2));
console.log(nPares(4));
console.log(nPares(3));

console.log('--------------------------');

const primos = (N) => {
    console.log(`Primos hasta el número ${N}`);
    let isprimo = true;
    for (let candidatoPrimo = 1; candidatoPrimo <= N; candidatoPrimo++) {
        isprimo = true;
        for (let i = 2; i < candidatoPrimo; i++) {
            if (candidatoPrimo % i == 0) { isprimo = false; break; }
        }
        if (isprimo) console.log(candidatoPrimo);
    }
};

primos(12);