// **Consegna**
// Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco (attenzione: non bisogna copiare tutta la cartella dell'esercizio ma solo l'index.html, e le cartelle js/ css/ con i relativi script e fogli di stile, per evitare problemi con l'inizializzazione di git).
// ****
// Generare una griglia di gioco quadrata in cui ogni cella contiene un numero compreso tra 1 e 100.
// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
// I numeri nella lista delle bombe non possono essere duplicati.
// In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina, altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
// La partita termina quando il giocatore clicca su una bomba o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.
// **BONUS:**
// 1 - L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49
// **2- quando si clicca su una bomba e finisce la partita, evitare che si possa cliccare su altre celle
// ****3- quando si clicca su una bomba e finisce la partita, il software scopre tutte le bombe nascoste
// **Consigli del giorno:** :party_wizard:
// ****Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
// Ad esempio:
// Di cosa ho bisogno per generare i numeri?
// Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
// Le validazioni e i controlli possiamo farli anche in un secondo momento.

// Consegna:
// Generare una griglia di gioco quadrata in cui ogni cella contiene un numero compreso tra 1 e 100.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.
// Bonus:
// Aggiungere la possibilità di scegliere un livello di difficoltà in base al quale viene generata una griglia di uno dei seguenti range:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49

document.getElementById("start").addEventListener("click", startGame);

//MAIN FUNCTION
function startGame() { 
    //-1 Genero numeri casuali da 1 a 64 in ordine casuale e non ripetute
const gridSize = 100;
const gridArray = generateGridNumbers(gridSize);
console.log(gridArray);

//-2 Per ogni numero creo un grid items
const gridContainer = document.querySelector(".grid-container");
gridContainer.innerHTML ="";

    for (let i = 0; i < gridArray.length; i++){

        const thisNumber = gridArray[i];

        const domElement = generateGridItem(thisNumber);

        //aggiungo all'elemento appena creato la gestionde del click GRAZIE A QUESTO COMMANDO QUANDO CLICCO POSSO VEDEREI NUMEIR
        domElement.addEventListener("click", function(){
            this.classList.add("active");
        })

        //appendo questo elemento al contenitore
        gridContainer.append(domElement);
    }


};




//Function
/**
 * Description crea un array contente numeri da 1 a limite definito in ordine casuale e non ripetutiì
 * @param {any} gridNumberQuantity -> la quantità di numeri casuali in ordine da 1 al valore dato
 * @returns {any} -> array di numeri generati
 */
function generateGridNumbers(gridNumberQuantity){ //gridNumberQuantity ottinei 64 
    // crea l'array 
    const numberArray = [];

    //creo i numeri tramite un while
    while (numberArray.length < gridNumberQuantity){ // Mettiamo gridNumberQuantity, ma potevamo mettere 64, ma a noi dobbiamo mettere in questo caso gridNumberQuantity
        
        
        // 1.genera il numero random // il Mathrandom avremmo potuto meterlo anche, ma solo che per legibilità l'abbiamo fatto sotto.
        const randomNumber = getRndInteger(1, gridNumberQuantity); 

        //2.Se il numero non è all'interno dell'array,allora lo pusho 
        if (!numberArray.includes(randomNumber)){
            // pusha nell'array
            numberArray.push(randomNumber);
        }
    }
        return numberArray; //Deve essere dentro il while
    }
  

//Function Random Number
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;//This JavaScript function always returns a random number between min and max (both included):
}

//Dom Function 
/**
 * Description la funziona che general l'elemento html con numero all'interno
 * @param {any} number-> il numero che dobbiamo inserire all'interno dell'elemento html
 * @returns {any} -> L'elemento  html (il mio div)
 */ function generateGridItem (number){
      //Creo un elemento html
      const newElement = document.createElement("div");

      //aggingo lo span con il numero
      newElement.innerHTML = `<span>${number}</span>`;
      // console.log(newElement);// FARE SEMPRE DEI CHECK

      //assegno la classe grid-items
      newElement.classList.add("grid-item");

      //ritorno Elemento
      return newElement;
 }


 