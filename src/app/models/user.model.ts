export class User {
    public nom: string;
    public prenom: string;
    public email: string;
    public password: string;
    public highScore!: number;
    public embarquementTicketNumber!: string;


    constructor(name: string, firstName: string, mail: string, passwordUser: string,score:number,
                ticketId: string) {
        this.nom = name;
        this.prenom = firstName;
        this.email = mail;
        this.password = passwordUser;
        this.highScore = score;
        this.embarquementTicketNumber = ticketId;
    }
}
