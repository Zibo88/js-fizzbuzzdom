//Per ogni numero, dato un container nel DOM, appendi un elemento
//html con il numero o la stringa corretta.
//Applica uno stile differente a seconda del valore dell'indice
//per i multipli di 3, per i multipli di 5 e per i valori che sono sia
//multipli di 3 che di 5 (seguendo le regole della Milestone 1).
//Per questa Milestone avete lo screenshot allegato al messaggio.
//Prima di partire a scrivere codice poniamoci qualche domanda:
//Come faccio a sapere se un numero è divisibile per un altro?
//Abbiamo visto qualcosa di particolare che possiamo usare?
//Come creare nuovi elementi html e appenderli al container?
//Consigli del giorno:
//1. scriviamo sempre prima dei commenti in italiano per capire cosa
//vogliamo fare
//2. proviamo ad immaginare le operazioni
//che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"


const numberContainer = document.querySelector('.number-container');


for (i = 1 ; i <= 100; i++) {

    let colorSquare = '';

    let myNumber = i;
    if(i % 5 === 0 && i % 3 === 0){
        myNumber = ' FizzBuzz'
        colorSquare = 'bcg-green';
    } else if (i % 5 === 0) {
    myNumber = ' Buzz';
    colorSquare = `bcg-yellow`;
    } else if (i % 3 === 0) {
        myNumber = ' Fizz';
        colorSquare = `bcg-coral`;
    }else {
        colorSquare = `bcg-square`;
    }
   

    // creare square
    let newSquare = `<div class="square ${colorSquare}">${myNumber}</div>`;
    // concatenazione degli square
    numberContainer.innerHTML += newSquare;
  

}
