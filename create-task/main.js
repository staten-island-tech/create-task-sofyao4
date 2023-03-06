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

  document.querySelector(`.status`).innerHTML = "";

  const chooseWord = wordbank[Math.floor(Math.random() * wordbank.length)];
  const word = chooseWord.split("");
  console.log(chooseWord);
  let newArr = chooseWord.split("");
  for (var i = 0; i < word.length; i++) {
    newArr[i] = "_";
  }

  document.querySelector(`.gameSpace`).innerHTML = `<div> word: ${newArr.join(
    " "
  )}</div>`;
  let remains = newArr.length;

  document.getElementById("form").addEventListener("submit", function (e) {
    e.preventDefault();

    let guesses = document.querySelector(`#lett`).value.toLowerCase();
    if (word.includes(guesses)) {
      let idx = word.indexOf(guesses);
      const indices = [];
      while (idx !== -1) {
        indices.push(idx);
        newArr[idx] = guesses;
        idx = word.indexOf(guesses, idx + 1);
        remains--;
      }
    } else {
      history.push(guesses);
      lives--;
      console.log(lives);
      if (lives < 1) {
        document.querySelector(`.status`).innerHTML = "YOU LOST";
        lives = 0;
      }
    }
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
