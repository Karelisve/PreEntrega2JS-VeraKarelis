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

//leyendas 
const libroLeyendas = [
    {
        monstruo: "Espíritu del bosque",
        leyenda: "resplandecía con cabellos verdes y ojos que reflejaban la naturaleza misma. Cuando la corrupción amenazó su hogar, luchó valientemente contra el Devorador de Almas. La batalla duró años y consumió todo a su paso culminando en una explosión de luz dorada, sellando la maldad y restaurando la vida en los bosques. Elevado a una forma etérea, se convirtió en el protector eterno de la naturaleza, asegurando su armonía y vitalidad. La leyenda del Espíritu del Bosque perduró, recordando a todos que la valentía y el amor por la vida pueden vencer cualquier oscuridad. Su esencia brillará eternamente cuidando todos los bosques del continente.",
    }, 
    {
        monstruo: "Tragamundos",
        leyenda: "En los bosques olvidados, moraba el Tragamundos. Una masa oscura con ojos centelleantes, su apetito insaciable consumía todo. Los aldeanos temían su hambre nocturna y cómo despojaba sus pertenencias. Un joven valiente, Taren, desafió la oscuridad. Al enfrentar al monstruo, notó una tristeza en sus ojos. Taren ofreció amistad y comprensión en lugar de miedo. El Tragamundos se transformó, revelando su naturaleza solitaria y curiosa. Unidos, emprendieron aventuras asombrosas. La leyenda del joven y su amistad con el monstruo enseñó que en la oscuridad yace la posibilidad de encontrar la luz. Pero, a medida que pasaba el tiempo, el apetito del Tragamundos se volvía más incontrolable. Taren luchaba por calmar su hambre insaciable, pero ya no podía detenerlo. Un día, el Tragamundos desapareció, devorando a su fiel amigo en un acto desesperado. El bosque quedó sumido en un silencio oscuro, y la leyenda del Tragamundos se volvió una advertencia de que la amistad con la oscuridad puede tener consecuencias trágicas.",
    }, 
    {
        monstruo: "Troll de Sangre",
        leyenda: "Hace  años, en un bosque sombrío y olvidado, se albergaba un temible troll de sangre. Su presencia infundía terror, con piel pálida y ojos rojos como la sangre. Se decía que se alimentaba de la energía vital de los inocentes.  Un día, el valiente guerrero Erik escuchó los lamentos de los aldeanos y se embarcó en una misión para enfrentar al troll de sangre. La batalla fue una encrucijada épica entre el bien y el mal. Erik demostró valor y astucia, y estuvo a punto de derrotar al troll. Sin embargo, en un acto desesperado, el troll canalizó un poder oscuro y desencadenó un ataque final. Logró herir gravemente a Erik, cuya fuerza se desvanecía rápidamente. Mientras el guerrero yacía moribundo en el suelo, el troll huyó, riendo con una malicia insaciable. Aunque Erik intentó seguir al troll para detenerlo, sus esfuerzos fueron en vano. La leyenda del troll de sangre y el valiente sacrificio de Erik se propagó por toda la región. La gente recordaba con reverencia la nobleza del guerrero, que se enfrentó al mal sin vacilar, aún en los momentos más trágicos. Han rogado por años un guerrero que logre vencer ese mal de una vez por todas.",
    },
    {
        monstruo: "Ninfa del lago negro",
        leyenda: "Hace mucho tiempo, en un lugar apartado y enigmático, se escondía un lago de aguas oscuras conocido como el Lago Negro. Allí, según las leyendas, residía una misteriosa ninfa que era la guardiana del lugar. La ninfa del lago, cuyo nombre era Lila, era de una belleza sobrenatural, con cabellos tan negros como la noche y ojos que brillaban como estrellas. Su presencia infundía un aura de serenidad en el lago y su entorno. Se decía que Lila tenía el don de sanar corazones rotos y calmar las almas perturbadas. Los viajeros que llegaban a sus aguas en busca de consuelo eran recibidos por su risa melodiosa y la cálida luz de su presencia. Sin embargo, el Lago Negro también tenía su lado oscuro. Se decía que aquellos que se aventuraban en sus profundidades sin la guía y bendición de la ninfa, eran arrastrados por fuerzas desconocidas y nunca volvían a emerger. Su leyenda perduraba como un recordatorio de que en los lugares más oscuros siempre hay luz y que en los rincones más misteriosos siempre hay esperanza.",

    }
]




// Función para iniciar de nuevo el juego
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



// Función para mostrar la leyenda de un monstruo en el juego principal
function mostrarMonstruoElegido() {
    let monstruoElegido;

    while (true) {
        monstruoElegido = prompt("Elige un número para conocer una de las leyendas : 1, 2, 3 o 4");

        if (monstruoElegido >= 1 && monstruoElegido <= libroLeyendas.length) {
            const monstruo = libroLeyendas[monstruoElegido - 1];
            console.log("Monstruo: " + monstruo.monstruo);
            console.log("Leyenda: " + monstruo.leyenda);
            console.log("___________________________________________________________")
            break; // Salir del ciclo while una vez se ha mostrado la leyenda.
        } else {
            console.log("Opción inválida. Elige un número correcto");
        }
    }
}


// Función para que el jugador elija que leyenda leer
function elegirLeyenda() {
    console.log("Antes de comenzar esta aventura tienes que saber que nuestro continente está lleno de monstruos y seres inimaginables")
    console.log("_________________________________________________________________________")
    alert("Conoce alguno de ellos antes de seguir: ")
    mostrarMonstruoElegido();
    alert("¡Ahora puedes comenzar la aventura!")
}





//Programa principal
function comenzar(){
    //Empieza el juego
    alert("Bienvenido a la Aventura del Anillo de Fuego")
    console.log("Bienvenido a la Aventura del Anillo de Fuego")
    
    let personaje = prompt("Elige tu personaje: Conviertete en un caballero o en un mago")
    personaje = personaje.toLowerCase();
    console.log("Te has convertido en un: " + personaje)
    
    
    if (personaje == "caballero") {
        elegirLeyenda()
        console.log("Empiezas a transitar un sendero fuera del reino, a lo lejos ves en la montaña una pequeña y abandonada cabaña");
        caballeroEntra = prompt("¿Deseas entrar a la cabaña?");
        //en caso de obtener una respuesta incorrecta
        while (caballeroEntra.toLowerCase() !== "si" && caballeroEntra.toLowerCase() !== "no") {
            caballeroEntra = prompt("No es una respuesta digna de un aventurero. Elige tu destino 'si' o 'no':");
        }
        //primer camino a elegir del caballero
        if (caballeroEntra.toLowerCase() === "si") {
            console.log("Al entrar en ella encuentras una " + ARMA_CABALLERO_1);
            console.log("ya con tu nueva arma sales de la cabaña y sigues tu camino")
            console.log("___________________________________________________________________")
            console.log("al avanzar un poco más en el sendero se abre frente a ti un portal misterioso que te lleva a un reino en las montañas.")
            console.log("En el reino ves a todos huyendo, subes la mirada y a lo lejos ves que un troll de sangre se acerca hacia ti")
            console.log("____________________________________________________________________")
            alert("¡Préparate para luchar!")
            pelea()
            
            if(energiaJugador > 0 && caballeroEntra){
                nombreDeGuerrero = prompt("¿como te llamas guerrero?")
                console.log(nombreDeGuerrero + " !ERES DIGNO DE RECIBIR EL ANILLO DE FUEGO! ahora el reino está a salvo y todo gracias a ti.")
                console.log("Tu espada se ha convertido en fuego puro digna de un verdadero guerrero, úsala sabiamente y protege a tus aldeanos. Ya eres digno de ser un caballero de la orden del anillo")
            }
        //segunda opción a elegir del caballero
        } else {
            console.log("Decides no entrar en la cabaña y seguir tu camino.");
            console.log("Llegas a un puente que fue encantado hace más de 500 años por una bruja, entre las rocas de su entrada encuentras una " + ARMA_CABALLERO_2);
            console.log("Ya con tu nueva arma sigues avanzando por el puente y te encuentras de repente con el espíritu del bosque que protege el paso.");
            console.log("____________________________________________________________________");
            alert(" No puedes detenerte, demuestra ser digno de cruzar ¡Prepárate para la pelea!");
            pelea()
            
            if(energiaJugador > 0 && caballeroEntra){
                nombreDeGuerrero = prompt("¿Cómo te llamas guerrero?")
                console.log(nombreDeGuerrero + " !ERES DIGNO DE RECIBIR EL ANILLO DE FUEGO! por ser un gran aventurero y de un corazón noble te otorgo poder y fuerza ilimmitada.")
                console.log("Tu daga se ha convertido en fuego puro, usala sabiamente y serás el caballero más temido del continente, ahora puedes ayudar a todos aquellos indefensos que vagan por los senderos.")
            }
        }
        //primera opción a elegir del mago
    } else if (personaje == "mago") {
        elegirLeyenda()
        console.log("Empiezas a transitar un bosque tenebroso y olvidado del continente, a lo lejos ves una gran cueva cerca de las montañas");
        magoEntra = prompt("¿Deseas entrar a la cueva?");
        
        while (magoEntra.toLowerCase() !== "si" && magoEntra.toLowerCase() !== "no") {
            magoEntra = prompt("No es una respuesta digna de un aventurero. Elige tu destino 'si' o 'no':");
        }

        if (magoEntra.toLowerCase() === "si") {
            console.log("Te acercas a la cueva y al entrar encuentras un antiguo altar en donde yace un " + ARMA_MAGO_1);
            console.log("lo tomas en tus manos, sintiendo todo su poder y antes de poder salir un abismo se abre bajo tus pies")
            console.log("Caes en un lago donde no encuentras como salir, el cetro se llena de luz y frente a ti aparece una ninfa tenebrosa que intenta robarte el cetro")
            console.log("____________________________________________________________________")
            alert("No dejes que te lo robe, demuestra ser digno de poseerlo ¡Préparate para luchar!")
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
            console.log("Tomas el Báculo y de repente la niebla empieza a cubrir todo el sendero, una figura tenebrosa se alza, es el temible tragamundos. No dejes que tome tu báculo o se hará mucho más poderoso")
            console.log("____________________________________________________________________")
            alert("No se lo entregues, demuestra ser digno ¡Préparate para luchar por su poder!")
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


//__________________________________________________________________________________________________________________________________________________________________

//Programa Secundario


const libroGuerrero = [
    {
        guerrero: "Mago",
        historia: "En las brumosas tierras de Alderia, vivía el mago Avendel, dueño de un poder ancestral. Su sabiduría era legendaria, y los aldeanos acudían a él en busca de consejo y curación. En su torre de piedra, Avendel estudiaba antiguos pergaminos y dominaba conjuros olvidados. Sin embargo, un día oscuro, la sombra de la ambición lo tentó. Atraído por poderes prohibidos, liberó una fuerza maligna que amenazó la tierra. Atormentado por la culpa, decidió redimirse. Empleó su magia para sellar la oscuridad y proteger Alderia. Desde entonces, Avendel se convirtió en protector de la paz, aprendiendo que la verdadera grandeza reside en el equilibrio entre el poder y la compasión."
    },
    {
        guerrero: "Caballero",
        historia: "En un reino lejano, el Caballero Dorian cabalgaba en busca de honor y gloria. Valiente y justo, protegía a los indefensos y luchaba contra la oscuridad que amenazaba su tierra. En su corazón, guardaba un juramento de lealtad al rey y a los ideales de la caballería. En una épica batalla, enfrentó a un temible dragón que aterrorizaba al pueblo. Con su espada en alto, se enfrentó a la bestia escamosa y, con astucia, logró vencerla. Su nombre se hizo legendario, y la gratitud del pueblo lo llenó de humildad. El Caballero Dorian dejó un legado eterno, un ejemplo de coraje y nobleza para las generaciones venideras."
    },
    
]

const libroArmasMagicas = [
    {
        arma: "Espada del Destino",
        historia: "Forjada con el alma de un héroe caído, esta espada cambia de forma según la intención de su portador. De noble corazón, se convierte en una hoja fulgurante; si la oscuridad se apodera del guerrero, se transforma en un látigo venenoso."
    },
    {
        arma:"Escudo de la Eternidad",
        historia: "Hecho de acero celestial y grabado con runas antiguas, el escudo concede inmunidad a su portador en el momento de mayor peligro, desviando cualquier ataque mortal."
    },
    {
        arma:"Lanza del Relámpago",
        historia: "Creada por un trueno divino, esta lanza es capaz de convocar tormentas y dirigirlas hacia los enemigos del portador."
    },
    {
        arma:"Daga de las Sombras",
        historia:"Forjada en la profunda oscuridad, otorga invisibilidad y la capacidad de fundirse con las sombras, convirtiendo al portador en un asesino silencioso."
    },
    {
        arma:"Mazo del titán",
        historia:"Tan pesada como una montaña, esta maza impacta con la fuerza de un terremoto, haciendo temblar la tierra con cada golpe"
    },
    {
        arma:"Armadura del Alma",
        historia:"Esta armadura dorada fusiona el espíritu del portador con la armadura misma, convirtiéndose en una extensión de su voluntad y protegiéndolo de cualquier daño mortal."
    },
    {
        arma:"Corneta del Dragón",
        historia:"Tallada a partir del cuerno de un dragón ancestral, su sonido convoca a estas majestuosas criaturas para acudir en ayuda de su dueño en tiempos de necesidad."
    },
]

// Función para mostrar la historia de un guerrero
function mostrarHistoriaGuerrero(guerrero) {
    const historia = "Guerrero: " + guerrero.guerrero + "\nHistoria: " + guerrero.historia;
    console.log(historia);
}

// Función para mostrar la historia de un arma mágica
function mostrarHistoriaArmaMagica(arma) {
    const historia = "Arma: " + arma.arma + "\nHistoria: " + arma.historia;
    console.log(historia);
}

function volverHistorias() {
    const reiniciar = confirm("¿Quieres volver a leer nuestras historias?");
    if (reiniciar) {
        descubrir()
    } else {
    console.log("Gracias por jugar. ¡Hasta luego guerrero!");
}
}


//comienza el programa secundario
function descubrir(){

    alert("Bienvenido al Continente del Anillo, aquí podrás conocer la historia de nuestros mas grandes guerreros y las grandes armas con las cuales nos han bendecido para mantener a nuestro pueblo a salvo")
    console.log("Bienvenido al Continente del Anillo, aquí podrás conocer la historia de nuestros mas grandes guerreros y las grandes armas con las cuales nos han bendecido para mantener a nuestro pueblo a salvo")
    console.log("Adentrate en nuestro mundo")
    console.log("____________________________________________________________________")

    let eleccionJugador = prompt("Elige entre 'guerreros' o 'armas': ");

    while (eleccionJugador.toLowerCase() !== "guerreros" && eleccionJugador.toLowerCase() !== "armas") {
        eleccionJugador = prompt("No es una respuesta correcta, elige Guerreros o Armas para continuar");
    }
    
    // Se filtran las historias según la elección del jugador
    let historiasMostrar;
    if (eleccionJugador.toLowerCase() === "guerreros") {
        historiasMostrar = libroGuerrero;
    } else if (eleccionJugador.toLowerCase() === "armas") {
        historiasMostrar = libroArmasMagicas;
    } else {
        alert("¡Volvamos a la aventura!");
    }
    
    // Ordenar las historias alfabéticamente por el nombre del guerrero o el arma
    historiasMostrar.sort((a, b) => {
        const nombreA = a.guerrero || a.arma;
        const nombreB = b.guerrero || b.arma;
        return nombreA.localeCompare(nombreB);
    });

    // Mostrar las historias
    historiasMostrar.forEach((historia) => {
        if (historia.guerrero) {
        mostrarHistoriaGuerrero(historia);
        } else {
            mostrarHistoriaArmaMagica(historia);
        }
    });

    volverHistorias()
}
