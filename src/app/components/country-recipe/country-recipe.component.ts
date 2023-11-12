import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {RecetteService} from "../../services/recette/recette.service";
import {Recette} from "../../models/recette.model";

@Component({
    selector: 'app-country-recipe',
    templateUrl: './country-recipe.component.html',
    styleUrls: ['./country-recipe.component.scss']
})
export class CountryRecipeComponent implements OnInit {
    public countryName!: string;
    public recettes!: Recette[];

    public constructor(private route: ActivatedRoute, private recettesService: RecetteService) {
    }

    public ngOnInit(): void {
        this.route.params.subscribe(params => {
            this.countryName = params['nom'];
        });
        this.recettesService.getRecettesByCountry(this.countryName).subscribe(data => {
            this.recettes = data;
        })
    }
}
