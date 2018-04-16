// Ejercicio 1
const fecha = () => {
    let fechaActual = new Date();
    let dia = fechaActual.getDay();
    let hora = fechaActual.getHours();
    let minutos = fechaActual.getMinutes();
    let segundos = fechaActual.getSeconds();
    let solucion = `<h2>1- Write a JavaScript program to display the current day and time.</h2>`;
    switch (true) {
        case (dia == 0):
            dia = 'Domingo'
            break;
        case (dia == 1):
            dia = 'Lunes'
            break;
        case (dia == 2):
            dia = 'Martes'
            break;
        case (dia == 3):
            dia = 'Mièrcoles'
            break;
        case (dia == 4):
            dia = 'Jueves'
            break;
        case (dia == 5):
            dia = 'Viernes'
            break;
        case (dia == 6):
            dia = 'Sàbado'
            break;
        default:
            break;
    }
    if (hora >= 13 && hora <= 23) {
        hora = `${hora - 12} PM`;
    } else { hora = `${hora} AM`; }
    document.getElementById('ej1').innerHTML = solucion + `<p>Hoy es: ${dia}</br>La hora actual es: ${hora} : ${minutos} : ${segundos}</p>`;
};
setInterval('fecha()', 1000);

// ---------------------------------------------------------------------------------------------

// Ejercicio 2
const imprime = () => {
    document.getElementById('ej2').innerHTML = `<h2>2- Write a JavaScript program to print the contents of the current window.</h2>
    <div><button id="print"><i class="fas fa-print"></i></button></div>`;
    document.getElementById("print").addEventListener("click", function (evnt) {
        evnt.preventDefault();
        window.print();
    });
};
imprime();

// ---------------------------------------------------------------------------------------------

// Ejercicio 3
const fecha2 = () => {
    let fechaActual = new Date();
    let dia = fechaActual.getDate();
    let mes = fechaActual.getMonth();
    let año = fechaActual.getFullYear();
    document.getElementById('ej3').innerHTML = `<h2>3- Write a JavaScript program to get the current date.</h2><p>${mes + 1}-${dia}-${año}, ${mes + 1}/${dia}/${año} or ${dia}-${mes + 1}-${año}, ${dia}/${mes + 1}/${año}</p>`;
};
fecha2();

// ---------------------------------------------------------------------------------------------

// Ejercicio 4
const areaTriangulo = (a, b, c) => {
    let s = (a + b + c) / 2;
    let area = parseFloat(Math.sqrt(s * ((s - a) * (s - b) * (s - c)))).toFixed(4);
    document.getElementById('ej4').innerHTML = `<h2>4- Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.</h2><p>Lado a: ${a}<br>Lado b: ${b}<br>Lado c: ${c}<br>Area of triangle: ${area}</p>`;
};
areaTriangulo(5, 6, 7);

// ---------------------------------------------------------------------------------------------

// Ejercicio 5
const rotateString = (frase) => {
    console.log(frase);
    fraseArray = frase.split('');
    console.log(fraseArray);
};
rotateString('w3resource');

// ---------------------------------------------------------------------------------------------

// Ejercicio 6
// Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.
const añoBisiesto = (año) => {
    let bisiesto;
    if (año % 4 == 0 && (año % 100 != 0 || año % 400 == 0)) {
        bisiesto = 'es bisiesto';
    } else { bisiesto = 'no es bisiesto';; }
    document.getElementById('ej6').innerHTML += `</h2><p>El año ${año} ${bisiesto}.</p>`;

};
document.getElementById('ej6').innerHTML = `<h2>6- Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.`;
añoBisiesto(1900);
añoBisiesto(1908);
añoBisiesto(2004);
añoBisiesto(2100);
añoBisiesto(2176);
añoBisiesto(2200);