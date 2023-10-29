import { Commentaire } from "../models/commentaire.model";
import { recettes } from "./data-loader-recettes";
import { users } from "./data-loader-user";

export const commentaireData = [
  { commentaire: "délicieux", user: users[1].email, recette: recettes[1].nom, dateTime: new Date("2023-12-12T12:00:00Z") },
  { commentaire: "new !!!", user: users[2].email, recette: recettes[1].nom, dateTime: new Date("2023-12-12T12:30:00Z") },
  { commentaire: "ca passe", user: users[3].email, recette: recettes[5].nom, dateTime: new Date("2023-12-13T10:15:00Z") },
  { commentaire: "délicieux", user: users[2].email, recette: recettes[3].nom, dateTime: new Date("2023-12-14T15:45:00Z") }
];

export const commentaires: Commentaire[] = commentaireData.map(commentaireData => {
  return new Commentaire(commentaireData.commentaire, commentaireData.user, commentaireData.recette, commentaireData.dateTime);
});
