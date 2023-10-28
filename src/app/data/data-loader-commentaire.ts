import {Commentaire} from "../models/commentaire.model";
import {recettes} from "./data-loader-recettes";
import {users} from "./data-loader-user"

export const commentaireData = [
    {commentaire: "délicieux", user: users[1].email, recette: recettes[1].nom},
    {commentaire: "new !!!", user: users[2].email, recette: recettes[1].nom},
    {commentaire: "ca passe", user: users[3].email, recette: recettes[5].nom},
    {commentaire: "délicieux", user: users[2].email, recette: recettes[3].nom}
]

export const commentaires: Commentaire[] = commentaireData.map(commentaireData => {
    return new Commentaire(commentaireData.commentaire, commentaireData.user, commentaireData.recette);
});
