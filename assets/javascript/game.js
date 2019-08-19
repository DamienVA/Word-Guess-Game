var underscores = []

word = ["toyota", "honda", "nissan", "mazda", "subaru"]

var random = Math.floor(Math.random() * word.length);

chosenWord = word[random];


function createUnderscores() {
    for (let i = 0; i < chosenWord.length; i++) {
        underscores.push("_");
    }
    return underscores;
}
console.log(createUnderscores());

// document.onkeyup = function (event) {

//     var guess = event.key.toLowerCase();



// }