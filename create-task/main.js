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
function init() {
  let lives = 10;
  let history = [];
  const chooseWord = wordbank[Math.floor(Math.random() * wordbank.length)];
  const word = chooseWord.split("");
  let newArr = chooseWord.split("");
  let remains = newArr.length;

  for (var i = 0; i < word.length; i++) {
    newArr[i] = "_";
  }

  document.querySelector(`.status`).innerHTML = "";
  document.querySelector(`.gameSpace`).innerHTML = `<div> word: ${newArr.join(
    " "
  )}</div>`;

  document.getElementById("form").addEventListener("submit", function (e) {
    e.preventDefault();
    let guesses = document.querySelector(`#lett`).value.toLowerCase();
    function main() {
      if (word.includes(guesses)) {
        let index = word.indexOf(guesses);
        const indexes = [];
        while (index !== -1) {
          indexes.push(index);
          newArr[index] = guesses;
          index = word.indexOf(guesses, index + 1);
          remains--;
        }
      } else {
        history.push(guesses);
        lives--;
        if (lives < 1) {
          document.querySelector(`.status`).innerHTML = "YOU LOST";
          lives = 0;
        }
      }
    }
    main();
    if (remains === 0) {
      document.querySelector(`.status`).innerHTML = "YOU WON";
    }

    document.querySelector(`.gameSpace`).innerHTML = `<div> word: ${newArr.join(
      " "
    )}</div>`;
    document.querySelector(`#lives`).innerHTML = `Lives: ${lives}`;
    document.querySelector(
      `#history`
    ).innerHTML = `Guessed letters: ${history.join(" ")} `;
    document.querySelector(`#lett`).value = "";
  });
}
init();

document.querySelector(`#reset`).addEventListener("click", function () {
  location.reload();
});
