export class User {
    public nom: string;
    public prenom: string;
    public email: string;
    public password: string;
    public highScore!: number;


    constructor(name: string, firstName: string, mail: string, passwordUser: string,score:number ) {
        this.nom = name;
        this.prenom = firstName;
        this.email = mail;
        this.password = passwordUser;
        this.highScore = score;
    }
}
