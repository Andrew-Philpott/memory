export class Deck {
  constructor(numberOfPairs) {
    this.pairs = [];
    this.numberOfCardPairsTotal = numberOfPairs;
    this.numberOfCardPairsMade = 0;
  }

  resetPairs() {
    this.pairs = [];
  }

  getPairs() {
    return this.pairs;
  }

  addCard(card) {
    this.pairs.push(card);
  }
}