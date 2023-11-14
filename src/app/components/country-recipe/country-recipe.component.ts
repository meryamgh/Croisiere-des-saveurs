import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {RecetteService} from "../../services/recipe/recette.service";
import {Recette} from "../../models/recipe.model";

@Component({
  selector: 'app-country-recipe',
  templateUrl: './country-recipe.component.html',
  styleUrls: ['./country-recipe.component.scss']
})
export class CountryRecipeComponent implements OnInit {
  public countryName!: string;
  public recipes!: Recette[];

  public constructor(private route: ActivatedRoute, private recipesService: RecetteService) {
  }

  public ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.countryName = params['nom'];
    });
    this.recipesService.getRecipeByCountry(this.countryName).subscribe(data => {
      this.recipes = data;
    })
  }
}
