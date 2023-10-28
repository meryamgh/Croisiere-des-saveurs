import {Pipe, PipeTransform} from '@angular/core';
import {Recette} from "../models/recette.model";

@Pipe({
    name: 'customFilter'
})
export class CustomFilterPipe implements PipeTransform {

    public transform(recettes: Recette[], term: string): Recette[] {
        if (!term || term === '') {
            return recettes;
        }

        return recettes.filter(recette =>
            recette.nom.toLowerCase().includes(term.toLowerCase())
        );
    }
}
