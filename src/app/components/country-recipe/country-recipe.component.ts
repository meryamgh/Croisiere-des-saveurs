import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-country-recipe',
  templateUrl: './country-recipe.component.html',
  styleUrls: ['./country-recipe.component.scss']
})
export class CountryRecipeComponent implements OnInit {
  countryName!: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.countryName = params['nom'];
    });
  }
}
