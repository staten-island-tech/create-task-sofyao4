import "./style.css";
const wordbank = [
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
const chooseWord = wordbank[Math.floor(Math.random() * wordbank.length)];
const word = chooseWord.split("");
console.log(chooseWord);
console.log(word);

let remainingLetters = word.length;

document
  .querySelector(`.gameSpace`)
  .insertAdjacentHTML("afterend", `<div> word: ${word.join(" ")} </div>`);

const form = document.getElementById("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let guesses = document.querySelector(`#lett`).value;
  console.log(guesses);
  let idx = word.indexOf(guesses);
  const indices = [];
  while (idx !== -1) {
    indices.push(idx);
    console.log(idx);
    idx = word.indexOf(guesses, idx + 1);
  }
  console.log(indices);
  history.push(guesses);
});
