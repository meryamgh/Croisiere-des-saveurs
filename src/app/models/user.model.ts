import {Recette} from "./recette.model";

export class User {
    nom: string;
    prenom: string;
    email: string;
    favoris!: Recette[];
    password: string;

    constructor(name: string, firstName: string, mail: string, favorite: Recette[], passwordUser: string) {
        this.nom = name;
        this.prenom = firstName;
        this.email = mail;
        this.favoris = favorite;
        this.password = passwordUser;
    }
}
