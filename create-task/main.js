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
