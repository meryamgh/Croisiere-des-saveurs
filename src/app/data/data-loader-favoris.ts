import {Favoris} from "../models/favoris.model";
import {recettes} from "./data-loader-recettes";
import{users} from "./data-loader-user"

export const favorisData = [
    {favoris: recettes[1].nom, user: users[1].email},
    {favoris: recettes[2].nom, user: users[1].email},
    {favoris: recettes[2].nom, user: users[2].email},
    {favoris: recettes[11].nom, user: users[2].email},
    {favoris: recettes[12].nom, user: users[3].email},
    {favoris: recettes[13].nom, user: users[2].email}
]

export const favoris: Favoris[] = favorisData.map(favorisData => {
    return new Favoris(favorisData.favoris, favorisData.user);
});
