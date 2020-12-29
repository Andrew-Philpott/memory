import Deck from "./deck";

function createGame() {
  const difficultyInput = document.getElementById("difficulty-input");
  const value = parseInt(difficultyInput.value);
  if (value >= 2 && value <= 26) {
    createNewGameButton();
    createGameDisplay(new Deck(value));
  } else
    document.getElementById("error").innerHTML =
      "The number must be between 2 and 26";
}

function createCardsDisplay(gameDisplay, gameDeck) {
  const length = gameDeck.shuffledCards.length;
  for (var i = 0; i < length; i++) {
    const card = document.createElement("div");
    card.className = "card";
    card.id = `c-${i + 1}`;
    const cardValue = document.createElement("p");
    cardValue.className = "card-visibility";
    cardValue.innerHTML = gameDeck.shuffledCards[i];
    card.appendChild(cardValue);
    card.onclick = function () {
      if (gameDeck.pairs.length === 0 || gameDeck.pairs[0].id !== card.id) {
        cardValue.classList.toggle("card-visibility");
        gameDeck.checkForMatch(card).then((gameOver) => {
          if (gameOver) gameOptionsDisplay();
        });
      }
    };
    gameDisplay.appendChild(card);
  }
}

function createNewGameButton() {
  document.getElementById("game-options-start").remove();
  const newGameButton = document.createElement("button");
  newGameButton.id = "new-game-button";
  newGameButton.innerHTML = "New Game";
  newGameButton.classList.add("btn", "btn-primary");
  newGameButton.onclick = gameOptionsDisplay;
  document.getElementById("game-options").appendChild(newGameButton);
}

function createGameDisplay(gameDeck) {
  const gameDisplay = document.createElement("div");
  gameDisplay.id = "game-display";
  document.getElementById("main-content").appendChild(gameDisplay);
  createCardsDisplay(gameDisplay, gameDeck);
}

export default function gameOptionsDisplay() {
  const gameDisplay = document.getElementById("game-display");
  if (gameDisplay) gameDisplay.remove();
  const newGameButton = document.getElementById("new-game-button");
  if (newGameButton) newGameButton.remove();
  const start = document.createElement("div");
  const label = document.createElement("label");
  const input = document.createElement("input");
  const errorParagaph = document.createElement("p");
  const difficultyButton = document.createElement("button");
  start.id = "game-options-start";
  label.htmlFor = "difficulty-input";
  label.innerHTML = "Enter # of card pairs";
  input.id = "difficulty-input";
  input.type = "text";
  errorParagaph.id = "error";
  difficultyButton.id = "difficulty-submit";
  difficultyButton.classList.add("btn", "btn-primary");
  difficultyButton.innerHTML = "Start Game";
  difficultyButton.onclick = createGame;
  document.getElementById("game-options").appendChild(start);
  start.append(label, input, errorParagaph, difficultyButton);
}
