//declaración de variables
let caballeroEntra 
let magoEntra 
let nombreDeGuerrero

const ARMA_CABALLERO_1 = "Espada de dragón";
const ARMA_CABALLERO_2 = "Daga encantada";
const ARMA_MAGO_1 = "Cetro de diamante";
const ARMA_MAGO_2 = "Báculo de rayos oscuros";

const MIN = 10;
const MAX = 30;

let energiaJugador = 100;
let energiaMonstruo = 100;

//Función para calcular el golpe aleatorio del oponente
function calcularGolpe(){
    
    return Math.ceil(Math.random()*(MAX - MIN) + MIN);
}

const jugadorVivo = () => energiaJugador > 0
const ambosVivos = ()=> energiaJugador>0 && energiaMonstruo>0

//funcion para ejecutar la pelea entre el jugador y el oponente
function pelea (){
    while (ambosVivos()) {
        let golpeJugador = Number(prompt("ES TU MOMENTO DE ATACAR: escribe '20' para golpear o '25' para atacar con el arma"));
        while (golpeJugador != 20 && golpeJugador != 25) {
            golpeJugador = prompt("No estas atacando, escribe '20' o '25' para atacar");
        }
        const golpeMonstruo = calcularGolpe();
        energiaMonstruo -= golpeJugador;
        energiaJugador -= golpeMonstruo;
        console.log("Golpeaste al monstruo y le causaste " + golpeJugador + " puntos de daño.");
        console.log("El monstruo te ha golpeado causandote " + golpeMonstruo + " puntos de daño.");
        console.log("Tú energía es de " + energiaJugador);
        console.log("La energía del monstruo es " + energiaMonstruo);
        console.log("-----------------------------");
    }
    if (energiaJugador <= 0) {
        console.log("El monstruo te ha vencido, deshonraste a tu aldea. Intenta de nuevo, todavía puedes ser digno del anillo de fuego");
    } else {
        console.log("¡Lo has conseguido! derrotaste al monstruo y ahora puedes recibir tu recompensa");
    }
} 

// iniciar de nuevo
function reiniciarJuego() {
    const reiniciar = confirm("¿Quieres volver a iniciar la aventura?");
    if (reiniciar) {
    // se reestablecen las variables
    energiaJugador = 100;
    energiaMonstruo = 100;
    //Comenzar el juego nuevamente
    comenzar()
    } else {
    console.log("Gracias por jugar. ¡Hasta luego guerrero!");
    }
}


function comenzar(){
//Empieza el juego
alert("Bienvenido a la Aventura del Anillo de Fuego")
console.log("Bienvenido a la Aventura del Anillo de Fuego")

let personaje = prompt("Elige tu personaje: Conviertete en un caballero o en un mago")
personaje = personaje.toLowerCase();
console.log("Te has convertido en un: " + personaje)

if (personaje == "caballero") {
    console.log("Transitas un sendero fuera del reino, a lo lejos ves una pequeña cabaña");
    caballeroEntra = prompt("¿Desea entrar a la cabaña?");
    //en caso de obtener una respuesta incorrecta
    while (caballeroEntra.toLowerCase() !== "si" && caballeroEntra.toLowerCase() !== "no") {
        caballeroEntra = prompt("No es una respuesta digna de un aventurero. Elige tu destino 'si' o 'no':");
    }
    //primer camino a elegir del caballero
    if (caballeroEntra.toLowerCase() === "si") {
        console.log("Al entrar encuentras una " + ARMA_CABALLERO_1);
        console.log("ya con tu nueva arma sales de la cabaña y se abre un portal misterioso que te lleva a un reino en las montañas.")
        console.log("En el reino ves a todos huyendo y a lo lejos ves que un Ogro del pantano se acerca hacia ti")
        alert("¡Préparate para luchar!")
        pelea()

        if(energiaJugador > 0 && caballeroEntra){
            nombreDeGuerrero = prompt("¿como te llamas guerrero?")
            console.log(nombreDeGuerrero + " !ERES DIGNO DE RECIBIR EL ANILLO DE FUEGO! ahora el reino está a salvo y todo gracias a ti.")
            console.log("Tu espada se ha convertido en fuego puro digna de un verdadero guerrero, úsala sabiamente y protege a tus aldeanos. Ya eres digno de ser un caballero de la orden del anillo")
        }
    //segunda opción a elegir del caballero
    } else {
        console.log("Decides no entrar y seguir tu camino.");
        console.log("Llegas a un puente que fue encantado hace más de 500 años por una bruja y encuentras una " + ARMA_CABALLERO_2);
        console.log("Ya con tu nueva arma sigues avanzando y te encuentras de repente con una araña gigante que protege el paso");
        alert(" No puedes detenerte ¡Prepárate para la pelea!");
        pelea()

        if(energiaJugador > 0 && caballeroEntra){
            nombreDeGuerrero = prompt("¿Cómo te llamas guerrero?")
            console.log(nombreDeGuerrero + " !ERES DIGNO DE RECIBIR EL ANILLO DE FUEGO! por ser un gran aventurero y de un corazón noble te otorgo poder y fuerza ilimmitada.")
            console.log("Tu daga se ha convertido en fuego puro, usala sabiamente y serás el caballero más temido del continente, ahora puedes ayudar a todos aquellos indefensos que vagan por los senderos.")
        }
    }
    //primera opción a elegir del mago
} else if (personaje == "mago") {
    console.log("Transitas un bosque tenebroso, a lo lejos ves una gran cueva");
    magoEntra = prompt("¿Desea entrar a la cueva?");

    while (magoEntra.toLowerCase() !== "si" && magoEntra.toLowerCase() !== "no") {
        magoEntra = prompt("No es una respuesta digna de un aventurero. Elige tu destino 'si' o 'no':");
    }

    if (magoEntra.toLowerCase() === "si") {
        console.log("Al entrar encuentras un antiguo altar en donde yace un " + ARMA_MAGO_1);
        console.log("lo tomas en tus manos y un abismo se abre bajo tus pies")
        console.log("Caes en un lago donde no encuentras como salir, el cetro se llena de luz y frente a ti aparece una sirena tenebrosa que intenta robarte el cetro")
        alert("No dejes que te lo robe ¡Préparate para luchar!")
        pelea()
        
        if(energiaJugador > 0 && magoEntra){
            nombreDeGuerrero = prompt("¿Cómo te llamas guerrero?")
            console.log(nombreDeGuerrero + " !ENCONTRASTE EL ANILLO DE FUEGO! bienvenido a la orden del anillo, pasaste la prueba de la cueva y ahora posees el cetro mágico del fuego, invoca su poder y tus enemigos temblarán.")
            console.log("Usalo sabiamente, potencia tu magia y protege al continente de la maldad")
        }

    //segunda opción a elegir del mago
    } else {
        console.log("Decides no entrar a la cueva y seguir tu camino.");
        console.log("Mientras deambulas por el sendero te topas con una hada oscura y te guía para encontrar entre las raíces de un viejo árbol un " + ARMA_MAGO_2 + " el hada te advierte que algo malo se está acercando");
        console.log("Tomas el Báculo y de repente la niebla empieza a cubrir todo el sendero, una figura tenebrosa se alza y te pide que devuelvas su báculo")
        alert("No se lo entregues. ¡Préparate para luchar por su poder!")
        pelea()

        if(energiaJugador > 0 && magoEntra){
            nombreDeGuerrero = prompt("¿Cómo te llamas guerrero?")
            console.log(nombreDeGuerrero + " !DESCUBRISTE EL PODER DEL ANILLO DE FUEGO! tus destrezas en la batalla te han hecho merecedor del anillo, el báculo que encontraste es un objeto robado hace milenios por ese monstruo, ahora te pertenece y cuando invoques su poder se convertirá en fuego puro")
            console.log("Usalo sabiamente y recorre los bosques con él, brindando luz y justicia a todos los aldeanos y animales en peligro")
        }
    }
} else {
    console.log("Vuelve a empezar y elige un personaje digno");
}
reiniciarJuego()
}



