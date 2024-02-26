// import

// Path: assets/js/main.js

import { Animal,Leon, Lobo,Oso,Serpiente,Aguila } from "./index.js"

let boton = $("#btnRegistrar");
let animal = $("#animal");
let edad = $("#edad");
let comentarios = $("#comentarios");



boton.click(function (e) {
    e.preventDefault();
    let animalElegido = animal.val();
    let edadElegida = edad.val();
    let comentariosElegidos = comentarios.val();
    let animalNuevo;
    switch (animalElegido) {
        case "Leon":
            animalNuevo = new Leon(animalElegido,edadElegida,"assets/imgs/leon.png",comentariosElegidos,"assets/sounds/leon.mp3");
            break;
        case "Lobo":
            animalNuevo = new Lobo(animalElegido,edadElegida,"assets/imgs/lobo.png",comentariosElegidos,"assets/sounds/lobo.mp3");
            break;
        case "Oso":
            animalNuevo = new Oso(animalElegido,edadElegida,"assets/imgs/oso.png",comentariosElegidos,"assets/sounds/oso.mp3");
            break;
        case "Serpiente":
            animalNuevo = new Serpiente(animalElegido,edadElegida,"assets/imgs/serpiente.png",comentariosElegidos,"assets/sounds/serpiente.mp3");
            break;
        case "Aguila":
            animalNuevo = new Aguila(animalElegido,edadElegida,"assets/imgs/aguila.png",comentariosElegidos,"assets/sounds/aguila.mp3");
            break;
    }
    console.log(animalNuevo);
    animalNuevo.getSonido();
});
