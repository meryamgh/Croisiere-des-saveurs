export class User {
  public lastName: string;
  public firstName: string;
  public email: string;
  public password: string;
  public highScore!: number;
  public boardingTicketNumber!: string;

  constructor(
    userLastname: string, userFirstName: string,
    userEmail: string, passwordUser: string,
    userScore: number, ticketId: string) {
    this.lastName = userLastname;
    this.firstName = userFirstName;
    this.email = userEmail;
    this.password = passwordUser;
    this.highScore = userScore;
    this.boardingTicketNumber = ticketId;
  }
}
