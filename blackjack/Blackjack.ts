import User from './User'
import Round from './Round'
import prompts from 'prompts'

class BlackJack {
  private users: User[]

  constructor() {
    this.users = []
  }

  public async start() {
    while (true) {
      await this.addUserPrompt()

      if (this.users.length === 0) {
        console.log('No users in game')
        return;
      }

      const round = new Round(this.users)
      await round.start()
  
      await this.removeUserPrompt()
    }
  }

  private async addUserPrompt() {
    while (true) {
      const shouldAddUserResponse = await prompts({
        type: 'select',
        name: 'value',
        message: 'Add User?',
        choices: [
          { title: 'Yes', value: 'y'},
          { title: 'No', value: 'n'},
        ],
        initial: 0
      })

      if (shouldAddUserResponse.value === 'n') {
        break
      }

      const { name, balance } = await prompts([
        {
          type: 'text',
          name: 'name',
          message: 'Name:'
        },
        {
          type: 'text',
          name: 'balance',
          message: 'Balance:',
        }
      ])

      this.users.push(new User(name, balance))
    }
  }

  private async removeUserPrompt() {
    const userIdsToRemove = new Set()
    for (const user of this.users) {
      const removeUserResponse = await prompts({
        type: 'select',
        name: 'value',
        message: `Remove user #${user.getId()}?`,
        choices: [
          { title: 'Yes', value: 'y'},
          { title: 'No', value: 'n'},
        ],
        initial: 0
      })

      if (removeUserResponse.value === 'y') {
        userIdsToRemove.add(user.getId())
      }
    }

    this.users = this.users.filter(user => {
      return !userIdsToRemove.has(user.getId())
    })
  }
}

const blackJack = new BlackJack()
blackJack.start()