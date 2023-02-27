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
const chooseWord = words[Math.floor(Math.random() * words.length)];
const word = chooseWord.split("");
console.log(chooseWord);
console.log(word);

let remainingLetters = word.length;

document
  .querySelector(`.gameSpace`)
  .insertAdjacentHTML("afterend", `<div> word: ${word.join(" ")} </div>`);

const form = document.getElementById("form");

form.addEventListener("submit", function (e) {
  let guesses = document.querySelector(`#lett`).value;
  e.preventDefault();
  console.log(guesses);
  if (guesses.length <= 1) {
    if (word.includes(guesses)) {
      const letter = console.log();
    }
  }
});
const indices = [];
const array = chooseWord.split("");
const element = document.querySelector(`#lett`).value;
let idx = array.indexOf(element);
while (idx !== -1) {
  indices.push(idx);
  idx = array.indexOf(element, idx + 1);
}
console.log(indices);
console.log(array);
