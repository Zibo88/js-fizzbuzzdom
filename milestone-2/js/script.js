//Per ogni numero, data una ul nel DOM, 
//aggiungete un elemento html li con il numero o la stringa 
//corretta (seguendo le regole della Milestone 1).


const numberContainer = document.querySelector ('.number-container');
const listItem = `<div class="box"></div>`;
for(i = 1; i <= 100; i++){
    let myNumber = i;
    if (i % 5 === 0) {
    myNumber += ' Buzz';
    } else if (i % 3 === 0) {
        myNumber += ' Fizz';
    }
    numberContainer.innerHTML += listItem + myNumber; 
}







