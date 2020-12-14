export default class User {
  static uuid: number = 1
  private id: number
  private name: string
  private balance: number

  constructor(name: string, balance: number) {
    this.id = User.uuid++
    this.name = name
    this.balance = balance
  }

  public getId(): number {
    return this.id
  }
  public getName(): string {
    return this.name
  }
  public getBalance(): number {
    return this.balance
  }
}