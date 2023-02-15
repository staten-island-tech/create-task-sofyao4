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
const input = document.querySelector(`#input`);
if (input > 1) {
  form.innerHTML = "please insert one letter";
}
form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("workd");
});
// while (remainingLetters < 0) {
//   const guess = prompt("enter letter");
//   for (var j = 0; j < word.length; j++) {
//     if ((word[j] = guess)) {
//       answerArray[j] = guess;
//       remainingLetters--;
//     }
//     history.push(guess);
//   }
// }
// console.log(history);
