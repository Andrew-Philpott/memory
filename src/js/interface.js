import { Deck } from './../js/deck.js';
  
export function selectPairs(numberOfCardPairs) {
  let cardSelection = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  let selectedCards = cardSelection.slice(0, numberOfCardPairs);
  let cardPairs = selectedCards.concat(selectedCards);
  return cardPairs;
}

export function  shufflePairs(selectionArray) {
  let newArray = [];
  let initialSelectionArrayLength = selectionArray.length;

  for(let i = 0; i < initialSelectionArrayLength; i++) {
    let currentSelectionArrayLength = selectionArray.length;
    let value = Math.floor((Math.random() * (currentSelectionArrayLength-1)));
    newArray.push(selectionArray[value]);
    selectionArray.splice(value,1);
  }
  return newArray;
}
export function createGameListener() {
  let mainContent = document.getElementById("main-content");
  while(mainContent.firstChild) {
    mainContent.removeChild(mainContent.firstChild);
  }
  removeDifficultyInputFunctionality();
  createDifficultyInputFunctionality();
  document.getElementById("difficulty-submit").addEventListener("click", createGame);
}

export function createDifficultyInputFunctionality() {
  let labelForDifficulty = document.createElement("label");
  labelForDifficulty.htmlFor = 'difficulty-input';
  labelForDifficulty.innerHTML = 'Enter # of card pairs';
  let inputForDifficulty = document.createElement("input");
  inputForDifficulty.type = 'text';
  inputForDifficulty.id = 'difficulty-input';
  let divForErrorMessage = document.createElement("div");
  divForErrorMessage.id = 'error';
  let buttonForDifficulty = document.createElement("button");
  buttonForDifficulty.id = 'difficulty-submit';
  buttonForDifficulty.classList.add("btn", "btn-primary");
  buttonForDifficulty.innerHTML = 'Start Game';
  let gameInput = document.getElementById("game-input");
  gameInput.appendChild(labelForDifficulty);
  gameInput.appendChild(inputForDifficulty);
  gameInput.appendChild(divForErrorMessage);
  gameInput.appendChild(buttonForDifficulty);
}

export function removeDifficultyInputFunctionality() {
  let gameInput = document.getElementById("game-input");
  while(gameInput.firstChild) {
    gameInput.removeChild(gameInput.firstChild);
  }
}
export function validateDifficultyNumber(difficultyNumber) {
  if((difficultyNumber >= 2) && (difficultyNumber <= 26)) {
    return true;
  }
  let error = document.getElementById("error");
  error.innerHTML = "";
  let errorMessage = document.createElement("p");
  errorMessage.innerHTML = "The number must be between 2 and 26";
  error.appendChild(errorMessage);
  return false;
}

export function createGameDisplayContainerHtml() {
  let gameDisplay = document.createElement("div");
  gameDisplay.id = "game-display";
  document.getElementById("main-content").appendChild(gameDisplay);
}

export function createCardPairsHtml(cards) {
  createGameDisplayContainerHtml();
  let gameDisplay = document.getElementById("game-display");
  for(let i = 0; i < cards.length; i++) {
    let cardNode = document.createElement("div");
    cardNode.className = "card";
    let cardTextNode = document.createElement("p");
    cardTextNode.classList.add("card-text", "show");
    cardTextNode.innerHTML = `${cards[i]}`;
    cardNode.appendChild(cardTextNode);
    gameDisplay.appendChild(cardNode);
  }
}

export function createGame() {
  let difficultyInput = document.getElementById("difficulty-input");
  let inputtedDifficulty = parseInt(difficultyInput.value);
  if(validateDifficultyNumber(inputtedDifficulty)) {
    removeDifficultyInputFunctionality();
    let cards = selectPairs(inputtedDifficulty);
    let shuffledCards = shufflePairs(cards);
    createCardPairsHtml(shuffledCards);
    let deck = new Deck((cards.length)/2);
    startGame(deck);
  }
}

export function startGame(deck) {   
  let cards = document.getElementsByClassName("card");
  for(let i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", function() {
      let currentCard = this;
      showCard(currentCard, deck);
    });
  }
  createNewGameButtonHtml();
  setInterval(() => {
    checkForMatch(deck);
  }, 300);
}
export function createNewGameButtonHtml() {
  let newGameButton = document.createElement("button");
  newGameButton.id = "new-game-button";
  newGameButton.innerHTML = "New Game";
  newGameButton.classList.add("btn", "btn-primary");
  document.getElementById("game-input").appendChild(newGameButton);
  attachNewGameButtonListener();
}

export function attachNewGameButtonListener() {
  document.getElementById("new-game-button").addEventListener("click", createGameListener);
}

export function  waitOneSecondOnFailedSecondCard(x) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x);
    }, 1000);
  });
}
  
export function sleep(milliseconds, deck) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
  checkForMatch(deck);
}
export function showCard(currentCard, deck) {
  if(!(currentCard.classList.contains("clicked"))) {
    currentCard.classList.add('clicked');
    let cardText = currentCard.firstElementChild;
    cardText.classList.toggle('show');
    deck.addCard(currentCard);
  }
}
export function start() {
  createGameListener();
}
export function checkForMatch(deck) {
  if(deck.getPairs().length === 2) {
    if(deck.getPairs()[0].firstElementChild.textContent !== deck.getPairs()[1].firstElementChild.textContent) {
      deck.getPairs()[0].classList.remove("clicked");
      deck.getPairs()[1].classList.remove("clicked");
      deck.getPairs()[0].firstElementChild.classList.toggle('show');
      deck.getPairs()[1].firstElementChild.classList.toggle('show');
      deck.resetPairs();
    } else {
      deck.numberOfCardPairsMade++;
      deck.resetPairs();
      if(deck.numberOfCardPairsMade === deck.numberOfCardPairsTotal) {
        start();
      }
    }
  }
}