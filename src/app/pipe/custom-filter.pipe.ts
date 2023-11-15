import {Pipe, PipeTransform} from '@angular/core';
import {Recipe} from "../models/recipe.model";

@Pipe({
    name: 'customFilter'
})
export class CustomFilterPipe implements PipeTransform {

    public transform(recipes: Recipe[], term: string): Recipe[] {
        if (!term || term === '') {
            return recipes;
        }

        return recipes.filter(recipe =>
          recipe.name.toLowerCase().includes(term.toLowerCase())
        );
    }
}
