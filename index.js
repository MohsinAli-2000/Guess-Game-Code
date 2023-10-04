let num = Math.floor (Math.random() * 100 + 1) ;
let guess = prompt("Guess the number ");
let chance = 0;
do {
    guess = Number.parseInt (guess);
    if (guess > num ){
    console.log ("Try a lesser")
    guess = prompt("Enter again")
    guess = Number.parseInt(guess)
    ++chance;
    continue;        
}else if ( guess < num ){
     console.log ("Try a greater")
    guess = prompt("Enter again")
    guess = Number.parseInt(guess)
    ++chance;
    continue;        
    }

}while (guess != num )
let score = 100 - chance;
alert (`Number was ${num} and  Your score is ${score} `)
