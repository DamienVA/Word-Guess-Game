var underscores = [];
var word = ["toyota", "honda", "nissan", "mazda", "subaru"];
var wrong = [];
var right = [];
var random = Math.floor(Math.random() * word.length);

var underDoc = document.getElementsByClassName('underscores');

chosenWord = word[random];
console.log(chosenWord);

function createUnderscores() {
    for (let i = 0; i < chosenWord.length; i++) {
        underscores.push("_");
    }
    return underscores;
};
console.log(createUnderscores());

document.onkeyup = function (event) {

    var ltr = event.key.toLowerCase();

    if (chosenWord.indexOf(ltr) > -1) {
        right.push(ltr);
        underscores[chosenWord.indexOf(ltr)] = ltr;
        console.log(underscores);
        if (underscores.join('') == chosenWord) {
            alert('You Win!');
        }
    }
    else{
    wrong.push(ltr);
    console.log(wrong);
}};




