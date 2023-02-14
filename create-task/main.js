import "./style.css";
const words = [
  "hangman",
  "javascript",
  "absurd",
  "avenue",
  "jazz",
  "microwave",
  "oxygen",
  "pneumonia",
  "syndrome",
  "synonym",
  "topaz",
  "jackpot",
  "unknown",
  "witchcraft",
  "xylophone",
  "zodiac",
];
const history = [];
const word = words[Math.floor(Math.random() * words.length)];
console.log(word);
const answerArray = [];
for (var i = 0; i < word.length; i++) {
  answerArray[i] = "_";
}
console.log(answerArray);

const remainingLetters = word.length;
console.log(remainingLetters);
document
  .querySelector(`.gameSpace`)
  .insertAdjacentHTML("afterend", `<div> word: ${answerArray.join(" ")}</div>`);

function game() {
  const form = document.querySelector(`.form`);
  const input = document.querySelector(`.input`);
  if (form > 1) {
    alert("please insert one letter");
  }
}
while (remainingLetters < 0) {
  const guess = prompt("enter letter");
  for (var j = 0; j < word.length; j++) {
    if ((word[j] = guess)) {
      answerArray[j] = guess;
      remainingLetters--;
    }
    history.push(guess);
  }
}
console.log(history);
