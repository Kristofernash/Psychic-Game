var alphabetLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins=0;
var losses=0;
var guessesLeft=9;
var guessesSoFar={};
var userGuess=null;
var letterToBeGuessed=alphabetLetters[math.floor(Math.random()* alphabetLetters.length)];
console.log("wins:"+ wins +"Losses:" + losses + "guessesLeft:" + guessesLeft + "guesses so far:" + guessesSoFar +"computer picked:" +etterToBeGuessed);


document.onkeyup=function(event){
var userGuess =string.fromCharCode(event.keycode).toLowerCase();

if(guessesSoFar.indexOf(userGuess)< 0 && alphabetLetters.indexOf(userGuess) >=0) 
    guessesSoFar[guessesSofar.length]=userGuess;
    guessesLeft--;

}

if(letterToBeGuessed==userGuess){
    wins++;
    console.log("You Won");
    guessesLeft=9;
    guessesSoFar=[];
    letterToBeGuessed= alphabetLetters[Math.floor(Math.random)]
}