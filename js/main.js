alert("Bienvenido a la Aventura del Anillo de Fuego")
console.log("Bienvenido a la Aventura del Anillo de Fuego")

let personaje = prompt("Elige tu personaje:  aldeano, caballero o un mago")
console.log("Te has convertido en un: " + personaje)

let aldeanoEntra 
let caballeroEntra 
let magoEntra 

const ARMA_ALDEANO_1 = "Acha de metal encantado";
const ARMA_ALDEANO_2 = "Daga mágica";
const ARMA_CABALLERO_1 = "Espada de dragón";
const ARMA_CABALLERO_2 = "Tridente infame";
const ARMA_MAGO_1 = "Cetro de diamante";
const ARMA_MAGO_2 = "Báculo de rayos oscuros";


if (personaje == "aldeano"){
    console.log("Transitas un sendero fuera del reino, a lo lejos ves una pequeña cabaña")
    aldeanoEntra = prompt("¿desea entrar a la cabaña?")

    while (aldeanoEntra.toLowerCase() !== "si" && aldeanoEntra.toLowerCase() !== "no") {
        aldeanoEntra = prompt("No es una respuesta digna de un aventurero. elige tu destino 'si' o 'no':");
    }

    if (aldeanoEntra.toLowerCase() === "si"){
        console.log("Al entrar encuentras una " + ARMA_ALDEANO_1)
    } else {
        console.log("decides no entrar y seguir tu camino.")
        console.log("llegas a un puente y encuentras una " + ARMA_ALDEANO_2)
        console.log("ya con tu nueva arma sigues avanzando y te encuentras de repente con una araña gigante")
        alert("¡Prepárate para la pelea!")

        function pelearConMonstruo() {
            let vidaMonstruo = 100;
            let vidaJugador = 100;

            let min = 10
            let max = 30

            function calcularGolpe(){
                return Math.ceil(Math.random()*(max -min + 1) + min);
            }

            while (vidaMonstruo > 0 && vidaJugador > 0) {
                let golpeMonstruo = calcularGolpe()
                let golpeJugador = calcularGolpe()

                if(golpeMonstruo == golpeJugador){
                        console.log("Siga Siga");
                    } else if(golpeMonstruo > golpeJugador){
                        vidaMonstruo -= vidaJugador;
                        console.log("la araña te ha golpeado con " + golpeMonstruo + " puntos");
                        console.log("tu vida es de " + vidaJugador);
                    } else {
                        vidaJugador -= vidaMonstruo;
                        console.log("Golpeaste a la araña con " + golpeJugador + "puntos")
                    }
            }

            // Verificar el resultado de la pelea
                if (vidaMonstruo <= 0) {
                    console.log("¡Has derrotado al monstruo! Eres un verdadero héroe.");
                } else {
                    console.log("Lamentablemente, el monstruo te ha vencido. Tu aventura llega a su fin.");
                }
            }
        }

    pelearConMonstruo()





    


} else if (personaje == "caballero") {
    console.log("Transitas por una aldea abandonada, a lo lejos ves un castillo en ruinas")
    caballeroEntra = prompt("¿Desea entrar al castillo?")

    while (caballeroEntra.toLowerCase() !== "si" && caballeroEntra.toLowerCase() !== "no") {
        caballeroEntra = prompt("No es una respuesta digna de un aventurero. elige tu destino 'si' o 'no':");
    }

    if (caballeroEntra.toLowerCase() === "si") {
        console.log("Al entrar encuentras un " + ARMA_CABALLERO_1)
    } else {
        console.log("decides no entrar al castillo y seguir tu camino")
        console.log("de repente caes por un abismo y en el fondo encuentras escondido entre las rocas un " + ARMA_CABALLERO_2)
    }

} else if (personaje == "mago"){
    console.log("Transitas un bosque tenebroso, a lo lejos ves una gran cueva")
    magoEntra = prompt("¿Desea entrar a la cueva?")

    while (magoEntra.toLowerCase() !== "si" && magoEntra.toLowerCase() !== "no") {
        magoEntra = prompt("No es una respuesta digna de un aventurero. elige tu destino 'si' o 'no':");
    }

    if (magoEntra.toLowerCase() === "si") {
        console.log("Al entrar encuentras un " + ARMA_MAGO_1)
    } else {
        console.log("Sigues tu camino y de repente aparece un hada oscura.")
        console.log("te obsequia un " + ARMA_MAGO_2 + " y te advierte que algo maligno se esta acercando")
    }

} else {
    console.log("Vuelve a empezar y elige un personaje digno")
}









