import $ from 'jquery';

export function defineCards(numberOfCardPairs) {
  let allCards = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  let subCards = allCards.slice(0, numberOfCardPairs);
  let doubleCards = subCards.concat(subCards);

  return doubleCards;
}

export function randomizePairs(selectionArray) {
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
  $("#error").html(``);
  let difficultyInput = $("#difficulty-input");
  let inputtedDifficulty = parseInt(difficultyInput.val());
  if(validateDifficultyNumber(inputtedDifficulty)) {
    difficultyInput.val("");
    createGame(inputtedDifficulty);
  }
  difficultyInput.val("");
}

export function createGame(inputtedDifficulty) {
  let cards = defineCards(inputtedDifficulty);
  let arr = randomizePairs(cards);
  displayPairs(arr);
}

export function displayPairs(cards) {
  let gameDisplay = $("#game-display");
  let cardsHtml = ``;
  for(let i = 0; i < cards.length; i++) {
      cardsHtml += `<div class='card'><p class='card-text hidden'>${cards[i]}</p></div>`;
  }
  return gameDisplay.html(cardsHtml);
}

export function cardClickListener() {
  let numberOfClicks = 0;
  let cardOneText = "";
  let cardTwoText = "";
  let cardOneElement = "";
  let cardTwoElement = "";
  $("#game-display").on("click", ".card", function() {
    let hiddenCardElement = $(this).find(".card-text");
    if(!(hiddenCardElement.hasClass("clicked"))) {
      numberOfClicks++;
      hiddenCardElement.addClass("clicked");
      hiddenCardElement.removeClass("hidden");
      if((numberOfClicks % 2) === 1) {
        cardOneElement = hiddenCardElement;
        cardOneText = cardOneElement.text();
      } else {
        cardTwoElement = hiddenCardElement;
        cardTwoText = hiddenCardElement.text();
        if(cardOneText === cardTwoText) {
        } else {
        cardOneElement.removeClass("clicked");
        cardTwoElement.removeClass("clicked");
        cardOneElement.addClass("hidden");
        cardTwoElement.addClass("hidden");
        }
      }
    }
  });
}

export function validateDifficultyNumber(difficultyNumber) {
  if((difficultyNumber >= 2) && (difficultyNumber <= 26)) {
    return true;
  }
  $("#error").html(`<p id='error-message'>The number must be between 2 and 26</p>`);
  return false;
}