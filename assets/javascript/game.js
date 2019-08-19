var guess = "";

word = ["toyota", "honda", "nissan", "mazda", "subaru"]

random = Math.floor(Math.random() * word.length);

chosenWord = word[random];
console.log(chosenWord)


document.onkeyup = function (event) {

    var guess = event.key.toLowerCase();



}