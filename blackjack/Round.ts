import prompts from 'prompts'
import Card from './Card'
import User from './User'
import Turn from './Turn'
import Hand from './Hand'

export default class Round {
  static readonly NUMBER_OF_DECK_IN_SHOE = 5
  private users: User[]
  private shoe: Card[]
  private turns: Turn[] = []

  constructor(users: User[]) {
    this.users = users
    this.shoe = this.generateShoe()
  }

  public async start() {
    for (const user of this.users) {
      const hand = new Hand()
      hand.addCard(this.shoe.pop() as Card)
      hand.addCard(this.shoe.pop() as Card)

      const turn = new Turn(user, hand)
      this.turns.push(turn)
    }

    for (const turn of this.turns) {
      await this.processTurn(turn)
    }

    console.log(this.turns)
  }

  private async processTurn(turn: Turn) {
    for (const hand of turn.getHands()) {
      while (hand.isValid()) {
        console.log(hand.getPoints())

        const response = await prompts({
          type: 'select',
          name: 'value',
          message: 'Choose an action',
          choices: [
            { title: 'Hit', value: 'Hit'},
            { title: 'Stand', value: 'Stand'},
            { title: 'Split', value: 'Split'},
          ],
          initial: 0
        })
  
        if (response.value === 'Hit') {
          const card = this.shoe.pop() as Card
          hand.addCard(card)
        } else if (response.value === 'Stand') {
          break
        }

      }

      if (!hand.isValid()) {
        console.log('Bust!')
      }
    }
  }

  private generateShoe(): Card[] {
    const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
    const suits = ['Spade', 'Club', 'Diamond', 'Heart']

    const shoe: Card[] = []

    for (let i = 0; i < Round.NUMBER_OF_DECK_IN_SHOE; i++) {
      for (const value of values) {
        for (const suit of suits) {
          shoe.push(new Card(value, suit))
        }
      }
    }

    this.suffleShoe(shoe)

    return shoe
  }

  private suffleShoe(shoe: Card[]): void {
    for (let i = 0; i < shoe.length; i++) {
      const j = Math.floor(Math.random() * (shoe.length - i)) + i
      const temp = shoe[i]
      shoe[i] = shoe[j]
      shoe[j] = temp
    }
  }
}