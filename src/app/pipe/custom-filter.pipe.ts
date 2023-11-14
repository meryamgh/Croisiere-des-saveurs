import {Pipe, PipeTransform} from '@angular/core';
import {Recette} from "../models/recipe.model";

@Pipe({
    name: 'customFilter'
})
export class CustomFilterPipe implements PipeTransform {

    public transform(recipes: Recette[], term: string): Recette[] {
        if (!term || term === '') {
            return recipes;
        }

        return recipes.filter(recipe =>
          recipe.nom.toLowerCase().includes(term.toLowerCase())
        );
    }
}
