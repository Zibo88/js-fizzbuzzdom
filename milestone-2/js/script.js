//Per ogni numero, data una ul nel DOM, 
//aggiungete un elemento html li con il numero o la stringa 
//corretta (seguendo le regole della Milestone 1).



for(i = 1; i <= 100; i++){
    let myNumber = i;
    if (i % 5 === 0) {
    myNumber += ' Buzz';
    console.log(myNumber);
    } else if (i % 3 === 0) {
        myNumber += ' Fizz';
        console.log(myNumber);
    }
    const numbersContainer = document.querySelector ('.numbers-container');
    const listItem = `<div class="box"></div>`;
    numbersContainer.innerHTML += listItem + myNumber;
    console.log(numbersContainer);
}



