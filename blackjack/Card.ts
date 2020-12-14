export default class Card {
  private value: string
  private suit: string
  
  constructor(value: string, suit: string) {
    this.value = value
    this.suit = suit
  }

  public getValue(): string {
    return this.value
  }
}