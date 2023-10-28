import {Favoris} from "../models/favoris.model";
import {recettes} from "./data-loader-recettes";
import{users} from "./data-loader-user"

export const favorisData = [
    {favoris: recettes[1], user: users[1].email},
    {favoris: recettes[2], user: users[1].email},
    {favoris: recettes[2], user: users[2].email},
    {favoris: recettes[21], user: users[2].email},
    {favoris: recettes[12], user: users[3].email},
    {favoris: recettes[13], user: users[2].email}
]

export const favoris: Favoris[] = favorisData.map(favorisData => {
    return new Favoris(favorisData.favoris, favorisData.user);
});
