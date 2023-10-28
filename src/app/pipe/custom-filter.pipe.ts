import {Pipe, PipeTransform} from '@angular/core';
import {Recette} from "../models/recette.model";

@Pipe({
    name: 'customFilter'
})
export class CustomFilterPipe implements PipeTransform {

    public transform(recettes: Map<Recette, boolean>, term: string): Recette[] {
        if (!term || term === '') {
            return Array.from(recettes.keys());
        }

        return Array.from(recettes.keys()).filter(recette =>
            recette.nom.toLowerCase().includes(term.toLowerCase())
        );
    }
}
