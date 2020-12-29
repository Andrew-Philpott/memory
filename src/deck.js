export default class Deck {
  constructor(numberOfPairs) {
    this.pairs = [];
    this.numberOfCardPairsMade = 0;
    this.shuffledCards = this.shuffleCards(numberOfPairs);
  }

  shuffleCards(numberOfCardPairs) {
    const cardSelection = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ];
    const letters = cardSelection.slice(0, numberOfCardPairs);
    const cards = letters.concat(letters);
    const shuffledCards = [];
    while (cards.length > 0) {
      const value = Math.floor(Math.random() * (cards.length - 1));
      shuffledCards.push(cards[value]);
      cards.splice(value, 1);
    }
    return shuffledCards;
  }

  checkForMatch(card) {
    this.pairs.push(card);
    if (this.pairs.length === 2) {
      return new Promise((resolve) => {
        setTimeout(() => {
          const firstCard = this.pairs[0].firstElementChild;
          const secondCard = this.pairs[1].firstElementChild;
          if (firstCard.textContent !== secondCard.textContent) {
            firstCard.classList.toggle("card-visibility");
            secondCard.classList.toggle("card-visibility");
          } else {
            this.numberOfCardPairsMade++;
            if (this.numberOfCardPairsMade === this.shuffledCards.length / 2)
              return resolve(true);
          }
          this.pairs = [];
          return resolve(false);
        }, 50);
      });
    } else return Promise.resolve(false);
  }
}
