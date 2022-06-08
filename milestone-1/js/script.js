// Scrivi un programma che stampi i numeri da 1 a 100.
// MILESTONE 1
// Per i multipli di 3 stampi Fizz al posto del numero 
//e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 
//stampi FizzBuzz.
// Stampare in console.

// numeri da 1 a 100;

for (i = 1 ; i <= 100; i++) {
    let myNumber;
    if(i % 5 === 0 && i % 3 === 0){
        myNumber = ' FizzBuzz'
        
    } else if (i % 5 === 0) {
    myNumber = ' Buzz';
    
    } else if (i % 3 === 0) {
        myNumber = ' Fizz';
    } else {
        myNumber = i;   
    }

    // stampare
    console.log(myNumber);
    
}
