import {Component} from '@angular/core';
import {Recette} from "../../models/recette.model";
import {RecetteService} from "../../services/recette/recette.service";

@Component({
    selector: 'app-recettes',
    templateUrl: './recettes.component.html',
    styleUrls: ['./recettes.component.scss']
})
export class RecettesComponent {

    public recettes !: Recette[];
    public term!: string;

    constructor(private recetteService: RecetteService) {
        this.loadData()

    }

    public loadData(): void {
        this.recetteService.getRecettes().subscribe(data => (this.recettes = data));
    }


}
