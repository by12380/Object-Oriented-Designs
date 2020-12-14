import Card from './Card'

const cardToPointsMap = {
  'A1': 1,
  'A11': 11,
  '2': 2,
  '3': 3,
  '4': 4,
  '5': 5,
  '6': 6,
  '7': 7,
  '8': 8,
  '9': 9,
  '10': 10,
  'J': 10,
  'Q': 10,
  'K': 10,
}

export default class Hand {
  private static uuid: number = 1
  private id: number
  private cards: Card[]

  constructor() {
    this.id = Hand.uuid++
    this.cards = []
  }

  public getId(): number {
    return this.id
  }

  public getPoints(): number {
    let points = 0
    for (const card of this.cards) {
      const point = card.getValue() === 'A' ? cardToPointsMap['A11'] : cardToPointsMap[card.getValue()]
      points += point
    }

    if (points <= 21) {
      return points
    }

    points = 0

    for (const card of this.cards) {
      const point = card.getValue() === 'A' ? cardToPointsMap['A1'] : cardToPointsMap[card.getValue()]
      points += point
    }

    return points
  }

  public addCard(card: Card): void {
    this.cards.push(card)
  }

  public isValid(): boolean {
    return this.getPoints() <= 21
  }
}