import {Favoris} from "../models/favoris.model";
import {recettes} from "./data-loader-recettes";
import {users} from "./data-loader-user"

export const favorisData = [
    {favoris: recettes[1].nom, user: users[1].email, picture: recettes[1].picture},
    {favoris: recettes[2].nom, user: users[1].email, picture: recettes[2].picture},
    {favoris: recettes[2].nom, user: users[3].email, picture: recettes[2].picture},
    {favoris: recettes[1].nom, user: users[4].email, picture: recettes[1].picture},
    {favoris: recettes[5].nom, user: users[1].email, picture: recettes[5].picture},
    {favoris: recettes[3].nom, user: users[2].email, picture: recettes[3].picture}
]

export const favoris: Favoris[] = favorisData.map(favorisData => {
    return new Favoris(favorisData.favoris, favorisData.user, favorisData.picture);
});
