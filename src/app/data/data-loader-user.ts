import {User} from "../models/user.model";
import {recettes} from "./data-loader-recettes";

export const usersData = [
    {
        nom: 'Dupont', prenom: 'John', email: 'john@example.com',
        favoris: recettes.slice(6, 9),
        password: "test123"
    },

    {
        nom: 'Smith', prenom: 'Alice', email: 'alice@example.com',
        favoris: recettes.slice(1, 5),
        password: "test123"
    },

    {
        nom: 'Johnson', prenom: 'Michael', email: 'michael@example.com',
        favoris: recettes.slice(3, 5),
        password: "test123"
    },

    {
        nom: 'Lee', prenom: 'Emma', email: 'emma@example.com',
        favoris: recettes.slice(3, 5),
        password: "test123"
    },

    {
        nom: 'Kim', prenom: 'David', email: 'david@example.com',
        favoris: recettes.slice(1, 5),
        password: "test123"
    }
];

export const users: User[] = usersData.map(userData => {
    return new User(userData.nom, userData.prenom, userData.email, userData.favoris, userData.password);
});
