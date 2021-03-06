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

const gridSize = 100;
const gridArray = generateGridNumbers(gridSize);
// console.log(gridArray);

//1 GENERAZIONE NUMERI RANDOM DA 1 A 16 TRA I 100 NUMERI

const bombsNumbers = 16;
const bombsArray = genereteUniqueRandomNumbers(bombsNumbers, gridSize);
console.log(bombsArray);
let score = 0;
//Se il numero della cella è presente nell'array delle bombe:

        // Fine gioco 
    //Altrimenti
        //La cella cliccata si colora di azzuro 
        //I numeri della cella viene salvato all'interno dell'array di numeri azzeccati
        //Se la lunghezza dell'array di numeri azzecati è uguale al numero massimo di tentativi di numeri consentiti:
            //<fine gioco l'utente ha vibto.



//-2 Per ogni numero creo un grid items
const gridContainer = document.querySelector(".grid-container");
gridContainer.innerHTML ="";

    for (let i = 0; i < gridArray.length; i++){

        const thisNumber = gridArray[i];
        // console.log(thisNumber);
        const domElement = generateGridItem(thisNumber);
        // console.log(domElement);

        //aggiungo all'elemento appena creato la gestionde del click GRAZIE A QUESTO COMMANDO QUANDO CLICCO POSSO VEDERE I NUMERI
        domElement.addEventListener("click", function(){

            if (bombsArray.includes(thisNumber)) {
                // console.log('partita finita, punteggio di ' + score);

                this.classList.add("bomb");
                
                //Stampare il numero di tentativi azzecati (il punteggio);
                const result = document.querySelector(".titolo");
                console.log(result);
                const newElement = document.createElement("h4");
                newElement.innerHTML = `Hai ragginto punteggio ${score}`;
                newElement.classList.add("titolo");
                // console.log(newElement);
                result.append(newElement);

                
            } else {
                this.classList.add("active");
                score++;
                if (score===84){
                    const result =document.querySelector(".titolo");
                    const newElement = document.createElement("h4");
                    newElement.innerHTML = `Hai vinto`;
                    newElement.classList.add("titolo");
                    result.append(newElement);
                }
            }

        })

        //appendo questo elemento al contenitore
        gridContainer.append(domElement);
    }


};

//Function
/**
 * Description dda 1 a 100
 * @param {any} gridNumberQuantity -> 
 * @returns {any} -> array di numeri generati
 */
function generateGridNumbers(gridNumberQuantity){ //gridNumberQuantity ottinei 64 
    
    // Crea tramite un for i 100 numeri 
    let numberFor = [];
    for (let i = 1; i <= gridNumberQuantity; i++){
        numberFor.push(i);
        // console.log(numberFor);
    }
    return numberFor; //Deve essere dentro il for
    
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



/**
 * Description Generriamo 16 numeri random tra i 100 delle celle.
 * @param {any} numbersRandom
 * @param {any} maxLimit
 * @returns {any} -> Array di 16 numeri
 */
function genereteUniqueRandomNumbers(numbersRandom, maxLimit){
    const randomArray =[]; 
    for ( i = 1; randomArray.length < numbersRandom;i++ ){
    
       const randomNumber = getRndInteger(1, maxLimit);
         
        if(!randomArray.includes(randomNumber)){
            randomArray.push(randomNumber);
        }
    
    }
    // console.log(randomArray);
    return randomArray;
}


function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }   

 

