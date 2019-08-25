var underscores = [];
var word = ["honda", "mazda", "toyota", "subaru", "mitsubishi", "nissan"];
var wrong = [];
var right = [];
var random = Math.floor(Math.random() * word.length);
var wins = 0;

var underDoc = document.getElementsByClassName('underscores');
var wrongDoc = document.getElementsByClassName('ltrGuessed');
var winDoc = document.getElementsByClassName('wins');

chosenWord = word[random];
console.log(chosenWord);

function createUnderscores() {
    for (var i = 0; i < chosenWord.length; i++) {
        underscores.push("_");
    }
};
//TRIED TO FIGURE OUT HOW TO FIX ISSUE WITH COMMENTED OUT CODE
document.onkeyup = function (event) {

    var ltr = event.key.toLowerCase();

    for (var i = 0; i < chosenWord.length; i++) {
        

        if (ltr === chosenWord[i] && underscores === '_') {
            
            right.push(ltr);
            underscores[chosenWord.indexOf(ltr)] = ltr;
            console.log(underscores);
            
        }
        
    }
//THIS CODE WORKS BUT ONLY WITH WORDS THAT DON'T REPEAT LETTERS
    // if (chosenWord.indexOf(ltr) > -1) {
    //     right.push(ltr);
    //     underscores[chosenWord.indexOf(ltr)] = ltr;
    //     underDoc.innerHTML = underscores.join(' ');
    //     console.log(underscores);
    //     if (underscores.join('') == chosenWord) {
    //         alert('You Win!');
    //     }
    // }
    // else {
    //     wrong.push(ltr);
    //     console.log(wrong);
    // }
};

if(underscores.join('') == chosenWord) {
    wins += 1;
    winsDoc[0].innerHTML = wins.toString();
}

createUnderscores();
console.log(underscores);
underDoc[0].innerHTML = underscores.join(' ');


