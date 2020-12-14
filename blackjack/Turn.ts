import User from "./User";
import Hand from './Hand'

export default class Turn {
  private user: User
  private hands: Hand[]

  constructor(user: User, hand: Hand) {
    this.user = user
    this.hands = [hand]
  }

  public getHands() {
    return this.hands
  }

  public addHand(): Hand {
    const hand = new Hand()
    this.hands.push(hand)
    return hand
  }

  public removeHand(id: number): void {
    this.hands = this.hands.filter(hand => {
      return hand.getId() !== id
    })
  }
}