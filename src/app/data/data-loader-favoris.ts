import { Favoris } from "../models/favoris.model";
import { recettes } from "./data-loader-recettes";
import { users } from "./data-loader-user";
import {Recette} from "../models/recette.model";


function shuffleArray(array: any[]): void {
  for (let i:number = array.length - 1; i > 0; i--) {
    const j:number = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

export function generateRandomFavoris(): Favoris[] {
  const favorisList: Favoris[] = [];

  for (let i = 0; i < users.length; i++) {
    const randomUserIndex:number = i;
    const userRecipes:Recette[] = [...recettes];
    shuffleArray(userRecipes);
    const selectedRecipes:Recette[] = userRecipes.slice(0, 5);

    for (const recipe of selectedRecipes) {
      const favorisData = {
        favoris: recipe.nom,
        user: users[randomUserIndex].email,
        picture: recipe.picture,
      };

      const existingFavoris:Favoris|undefined = favorisList.find(
        (fav) => fav.user === favorisData.user && fav.favoris === favorisData.favoris
      );

      if (!existingFavoris) {
        favorisList.push(new Favoris(favorisData.favoris, favorisData.user, favorisData.picture));
      }
    }
  }

  return favorisList;
}


export const favoris: Favoris[] = generateRandomFavoris();
