
(() => {
    'use strict'

    // C - Clubs (Tréboles)
    // D - Diamonds (Diamantes)
    // H - Hearts (Corazones)
    // S - Swords (Espadas)

    let deck = [];
    const tipos = ['C', 'D', 'H', 'S'],
          especiales = ['A', 'J', 'Q', 'K'];

    let puntosJugadores = [];

    // Referencias HTML
    const btnPedirCarta = document.querySelector('#btnPedirCarta'),
          btnDetenerJuego = document.querySelector('#btnDetenerJuego'),
          btnNuevoJuego = document.querySelector('#btnNuevoJuego');
        
    const puntosSpan = document.querySelectorAll('span'),
          pcCartas = document.querySelector('#pc-cartas'),
          jugadorCartas = document.querySelector('#jugador-cartas');

    
    const inicializarJuego = ( numJugadores = 2 ) => {
        deck = crearDeck();

        for(let i = 0; i < numJugadores; i++){
            puntosJugadores.push(0);
        }

        console.log({puntosJugadores});

    }

    // Función para crear un nuevo deck y lo barajea -> random
    const crearDeck = () => {

        deck = [];
        
        for(let i = 2; i <= 10; i++){
            for(let tipo of tipos){
                deck.push(i + tipo);
            }
        }

        for(let especial of especiales){
            for(let tipo of tipos){
                deck.push(especial + tipo);
            }
        }

        // shuffle viene de la librería underscore.js        
        return _.shuffle(deck);
    }

    // Función para pedir carta
    const pedirCarta = () => {
        // carta = deck[0];
        // deck.splice(carta, 1);

        if(deck.length === 0){
            throw 'Ya no hay cartas en el deck';
        }

        return deck.pop();
    }

    // Asignar el valor a la carta obtenida
    const valorCarta = (carta) => {

        //substring corta desde la posición que se indica en el primer argumento,
        //hasta la posición del segundo
        //removimos el último caracter
        const valor = carta.substring(0, carta.length - 1);

        // isNaN -> is Not a Number
        // if(isNaN(valor)){
        //     console.log('no numero');
        //     puntos = (valor === 'A') ? 11 : 10;
        // }else{
        //     console.log('si numero');
        //     //esto convierte el valor de un número de string a number
        //     puntos = valor * 1;
        // }

        // forma simplificada
        return (isNaN(valor)) ?
                (valor === 'A') ? 11 : 10
                : valor * 1; 
    }

    const acumularPuntos = () => {
        
    }

    // --------------------------------- Turno de la computadora ---------------------------------

    const turnoComputadora = (puntosMinimos) => {
        do {
            const carta = pedirCarta();
            puntosPC = puntosPC + valorCarta(carta);
            puntosSpan[1].innerText = puntosPC;

            const imgCarta = document.createElement('img');
            imgCarta.src = `assets/cartas/${carta}.png`;
            imgCarta.classList.add('carta');

            pcCartas.append(imgCarta);

            if(puntosMinimos > 21){
                break;
            }

        }while(puntosPC < puntosMinimos && puntosPC <= 21);

        setTimeout(() => {
            // if(puntosMinimos === puntosPC){
            //     alert('Has empatado');
            // }else if(puntosMinimos > 21){
            //     alert('Has perdido');
            // }
        
            if(puntosMinimos > puntosPC && puntosMinimos <= 21){
                alert('Has ganado!');
            }else if(puntosPC > puntosMinimos && puntosPC <= 21){
                alert('Has perdido');
            }else if(puntosMinimos === puntosPC){
                alert('Has empatado');
            }else if(puntosMinimos < puntosPC && puntosPC > 21){
                alert('Has ganado!');
            }else if(puntosPC < puntosMinimos && puntosMinimos > 21){
                alert('Has perdido');
            }
        }, 10);
    }  

    // --------------------------------- Eventos ---------------------------------

    btnPedirCarta.addEventListener('click', () =>{
        const carta = pedirCarta();
        puntosJugador = puntosJugador + valorCarta(carta);
        puntosSpan[0].innerText = puntosJugador;

        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${carta}.png`;
        imgCarta.classList.add('carta');

        jugadorCartas.append(imgCarta);

        if(puntosJugador > 21){
            btnPedirCarta.disabled = true;
            btnDetenerJuego.disabled = true;
            turnoComputadora(puntosJugador);
        } else if (puntosJugador === 21){
            btnPedirCarta.disabled = true;
            btnDetenerJuego.disabled = true;
            turnoComputadora(puntosJugador);
        }
    });

    btnDetenerJuego.addEventListener('click', () => {
        btnPedirCarta.disabled = true;
        btnDetenerJuego.disabled = true;
        turnoComputadora(puntosJugador);
    });

    btnNuevoJuego.addEventListener('click', ()=> {
        // deck = [];
        // crearDeck();
        inicializarJuego();
        
        puntosJugador = 0;
        puntosPC = 0;
        
        puntosSpan[0].innerText = 0;
        puntosSpan[1].innerText = 0;
        
        btnPedirCarta.disabled = false;
        btnDetenerJuego.disabled = false;
        
        jugadorCartas.innerHTML = '';
        pcCartas.innerHTML = '';
        
        console.clear();
    });
    
})();