function crearBillete(nombre, desde, hacia, claseEjecutiva) {
    return {
        nombre: nombre,
        desde: desde,
        hacia: hacia,
        claseEjecutiva: claseEjecutiva
    };
}

function upgrade(billete) {
    if (billete.claseEjecutiva) {
        console.log("¡Tu billete ya es de clase ejecutiva!");
    } else {
        billete.claseEjecutiva = true;
        console.log("¡Has sido ascendido a clase ejecutiva!");
    }
}

const billeteIda = crearBillete("Mario Rosario", "Madrid", "Londres", false);
const billeteVuelta = crearBillete("Omar El Founti", "Londres", "Madrid", false);

upgrade(billeteIda);

console.log(billeteIda);
console.log(billeteVuelta);
