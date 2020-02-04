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
      cardsHtml += `<div class='card'><p>${cards[i]}</p></div>`;
  }
  return gameDisplay.html(cardsHtml);
}

export function listen() {
  let clicks = 0;
  let first = "";
  let second = "";
  clicksListen(clicks, first, second);
   }

    export function clicksListen(clicks, first, second){
      let numberOfClicks;
      if(clicks !== 0) {
        numberOfClicks = clicks;
      } else {
        numberOfClicks = 0;
      }
      console.log(numberOfClicks);
    let firstCardValue  =  first;
    let secondCardValue = second;
      $("#game-display").on("click", ".card > p",function() {
        // numberOfClicks++;
        if((numberOfClicks % 2) === 0) {
          console.log(firstCardValue);
          console.log(secondCardValue);
          firstCardValue = $(this).text();

          clicksListen(numberOfClicks, firstCardValue, secondCardValue);
        }});
  
        $("#game-display").on("click", ".card > p",function() {  
          numberOfClicks++;
          if((numberOfClicks % 2) === 1) {
            secondCardValue = $(this).text();
            if(firstCardValue === secondCardValue) {
              alert("match");
            }
            console.log(numberOfClicks);
            listen();
          }
        });
    }
//         else if (numberOfClicks === 1) {
//         secondCardValue = $(this).text();
//       }
//   });

// }
  // else if(numberOfClicks === 1) {
  //   $("#game-display").on("click", ".card > p",function() {
  //     secondCardValue = $(this).text();
  //     console.log(numberOfClicks);
  //     console.log(secondCardValue);

  //     if(firstCardValue === secondCardValue) {
  //       alert("match");
  //     } else {
  //       alert("no match");
  //       listen();
  //     }
  //   })}

//   }
//   $("#game-display").on("click", ".card > p",function() {
//   if(numberOfClicks === 0) {
//     firstCardValue = $(this).text();
//   }}; 
  
//   else {
//     secondCardValue = $(this).text();
//   }
//   if(firstCardValue === secondCardValue) {
//     alert("match");
//     listen();
//   } else {
//     alert("no match");
//     listen();
//   }
// });
// }
//   $("#game-display").on("click", ".card > p",function() {
//     //firstCardValueHtml = $(this);
//     //firstCardValueHtml.hide();
//     //firstCardValueHtml.show();
//     let firstCardValue = $(this).text();
//     console.log(firstCardValue);
//     //firstCardValue = firstCard;
//     listenToSecondClick();
//   });
  
//   $(this).text();

//   listenToCards();
// }

// export function listenToFirstClick() {
//   $("#game-display").on("click", ".card > p",function() {
//     //firstCardValueHtml = $(this);
//     //firstCardValueHtml.hide();
//     //firstCardValueHtml.show();
//     let firstCardValue = $(this).text();
//     console.log(firstCardValue);
//     //firstCardValue = firstCard;
//     listenToSecondClick();
//   });
// }

// export function listenToSecondClick(firstCard) {
//   $("#game-display").on("click", ".card > p", function() {
//     let secondCard = $(this).text();
//     if(firstCard === secondCard) {
//       alert("match");
//       listen();
//     } else {
//       alert("no match");
//       listen();
//     }
//   });
// }

// export function listenToCards() {
//   //if ((numberOfClicks % 2) === 0){
//     $("#game-display").on("click", ".card > p",function() {

//       //firstCardValueHtml = $(this);
//       //firstCardValueHtml.hide();
//       //firstCardValueHtml.show();
//       let firstCardValue = $(this).text();
//       console.log(firstCardValue);
//       //firstCardValue = firstCard;
//       listenToSecondClick();
//     });
//  // } 
//   }
// export function clickCounter(){
//   let numberOfClicks= 0;
//   $("#game-display").on("click", ".card > p",function() {
//     numberOfClicks++;
//     console.log(numberOfClicks);
//     return numberOfClicks;
//   })
//   return numberOfClicks;
// }

// export function listenToSecondClick(firstCard) {
//   $("#game-display").on("click", ".card > p", function() {
//     let secondCard = $(this).text();
//     if(firstCard === secondCard) {
//       alert("match");
//       listen();
//     } else {
//       alert("no match");
//       listen();
//     }
//   });
// }




// // else if (numberOfClicks === 1){
// //     $("#game-display").on("click", ".card > p", function() {
// //       alert("Second listener");
// //       secondCardValueHtml = $(this);
// //       let secondCard = $(this).text();
// //       secondCardValue = secondCard;
// //       console.log(secondCard + "2");
// //       if(firstCardValue === secondCardValue) {
// //         firstCardValueHtml.show();
// //         secondCardValueHtml.show();
// //         numberOfClicks = 0;
// //         firstCardValue = "";
// //         secondCardValue = "";
// //         firstCardValueHtml = "";
//         secondCardValueHtml = "";
//       } else {
//         numberOfClicks = 0;
//         firstCardValue = "";
//         secondCardValue = "";
//         firstCardValueHtml = "";
//         secondCardValueHtml = "";
//       }
//     });
//   }