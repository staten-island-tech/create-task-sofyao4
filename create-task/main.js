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
function init() {
  const history = [];
  const chooseWord = words[Math.floor(Math.random() * words.length)];
  const word = chooseWord.split("");
  console.log(chooseWord);
  console.log(word);
  const answerArray = [];
  for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
  }
  console.log(answerArray);
  let remainingLetters = word.length;
  console.log(remainingLetters);
  document
    .querySelector(`.gameSpace`)
    .insertAdjacentHTML(
      "afterend",
      `<div> word: ${answerArray.join(" ")}</div>`
    );
}
init();

const form = document.getElementById("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const guesses = document.querySelector(`#lett`).value;
  console.log(guesses);
  if (guesses.length <= 1) {
    console.log("wirks");
  } else {
    console.log("insert one");
  }
});
