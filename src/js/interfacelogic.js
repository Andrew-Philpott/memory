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

export function displayPairs(cards) {
  let gameDisplay = $("#game-display");
  let cardsHtml = ``;
  for(let i = 0; i < cards.length; i++) {
      cardsHtml += `<div class='card'><p class='card-text'>${cards[i]}</p></div>`;
  }
  return gameDisplay.html(cardsHtml);
}

export function listen() {
  pageListener();

}

export function pageListener() {
  let numberOfClicks = 0;
  let cardOne = "";
  let cardTwo = "";
  $("#game-display").on("click", ".card-text", function() {
    numberOfClicks++;
    if((numberOfClicks % 2) === 1) {
      cardOne = $(this).text();
      console.log(cardOne);
    } else {
      cardTwo = $(this).text();
      if(cardOne === cardTwo) {
        console.log("match");
      } else {
        console.log("no match");
      }
      cardOne = "";
      cardTwo = "";
    }
  });
  };
  
  