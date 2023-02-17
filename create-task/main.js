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
const answerArray = [];
for (var i = 0; i < word.length; i++) {
  word[i] = "_";
}
console.log(word);

let remainingLetters = word.length;
console.log(remainingLetters);
document
  .querySelector(`.gameSpace`)
  .insertAdjacentHTML("afterend", `<div> word: ${word.join(" ")} </div>`);

const form = document.getElementById("form");

form.addEventListener("submit", function (e) {
  let guesses = document.querySelector(`#lett`).value;

  e.preventDefault();
  console.log(guesses);
  // while (guesses.length <= 1) {
  //   if (word.includes(guesses)) {
  //     console.log("includes");
  //   } else {
  //     console.log("does not include");
  //   }
  //   history.push(guesses);
  //   guesses += 1;
  //   console.log(guesses);
  //   console.log(history);
  // }
  if (guesses.length <= 1) {
    if (word.includes(guesses)) {
      const letter = console.log();
    }
  }
});
