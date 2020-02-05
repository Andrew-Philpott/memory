import $ from 'jquery';

export function defineCards(numberOfCardPairs) {
  let allCards = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
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
    let inputtedDifficulty = parseInt($("#difficulty-input").val());
    createGame(inputtedDifficulty);
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

export function pageListener() {
  let numberOfClicks = 0;
  let cardOne = "";
  let cardTwo = "";
  let cardOneElement = "";
  let cardTwoElement = "";
  $("#game-display").on("click", ".card", function() {
    numberOfClicks++;
    let hiddenCardElement = $(this).find(".card-text");
    // .card-text
    
    if((numberOfClicks % 2) === 1) {
      hiddenCardElement.removeClass("hidden");
      cardOneElement = hiddenCardElement;
      cardOne = hiddenCardElement.text();
      console.log(cardOne);
    } else {
      hiddenCardElement.removeClass("hidden");
      cardTwoElement = hiddenCardElement;
      cardTwo = hiddenCardElement.text();
      if(cardOne === cardTwo) {
        console.log("match");
      } else {
        cardOneElement.addClass("hidden");
        cardTwoElement.addClass("hidden");
        cardOne = "";
        cardTwo = "";
        cardOneElement = "";
        cardTwoElement = "";
      }
    }
  });
  };
  