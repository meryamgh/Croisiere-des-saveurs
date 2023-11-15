import {Component, OnInit} from '@angular/core';
import {Recipe} from "../../models/recipe.model";
import {RecipeService} from "../../services/recipe/recipe.service";
import {User} from "../../models/user.model";
import {Favoris} from "../../models/favoris.model";
import {FavorisService} from "../../services/favoris/favoris.service";
import {Router} from "@angular/router";
import {AnimationService} from "../../services/animations/animation.service";


@Component({
    selector: 'app-recipes',
    templateUrl: './recipes.component.html',
    styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {

    public allRecipesList: Map<string, string> = new Map<string, string>();
    public recipeNbrLikes: Map<string, number> = new Map<string, number>();
    public recipes !: Recipe[];
    public searchTerm!: string;
    private currentUser!: User;

    public countryFilter: string = "";
    public categoryFilter: string = "";
    public difficultyFilter: string = "";
    public preparationTimeFilter!: number;

    public countryOptions!: string[];
    public categoryOptions!: string[];
    public difficultyOptions!: string[];
    public allRecipes !: Recipe[];

    public constructor(private recetteService: RecipeService, private favorisService: FavorisService,
                       private router: Router, private animationService: AnimationService) {
    }

  public ngOnInit(): void {
    this.loadData();
  }

    public getAllRecipes(): void {
        this.recetteService.getAllRececipes().subscribe(recettesData => {
            this.recipes = recettesData;
            this.allRecipes = recettesData;
            recettesData.forEach((recette: Recipe) => {
                this.allRecipesList.set(recette.name, "false");
                this.recipeNbrLikes.set(recette.name, 0);
            });
          this.getFilteredReceipes();
        });
    }

    public applyFilter(): void {
        this.recipes = this.allRecipes;
        this.recipes = this.recipes.filter((recette: Recipe) => {
            const countryFiltered: boolean = !this.countryFilter || recette.country === this.countryFilter;
            const categoryFiltered: boolean = !this.categoryFilter || recette.category === this.categoryFilter;
            const difficultyFiltered: boolean = !this.difficultyFilter || recette.difficulty === this.difficultyFilter;
            const preparationTimeFiltered: boolean = !this.preparationTimeFilter || recette.preparationTime <= this.preparationTimeFilter;
            return countryFiltered && categoryFiltered && difficultyFiltered && preparationTimeFiltered;
        });
    }

    public getLikedRecipesByUser(): void {
        const storedUser: string | null = sessionStorage.getItem("userLogged");
        if (storedUser) {
            this.currentUser = JSON.parse(storedUser) as User;

            this.favorisService.getFavorisUser(this.currentUser.email).subscribe(favorisData => {

                favorisData.forEach((favoris: Favoris) => {
                    this.allRecipesList.set(favoris.favoris, "true");
                });
            });
        }
    }

    public getLikesByRecipes(): void {
        this.favorisService.getFavoris().subscribe(data => {
            data.forEach((favoris: Favoris) => {
                const previousLikeNbr = this.recipeNbrLikes.get(favoris.favoris);
                if (previousLikeNbr != undefined) {
                    this.recipeNbrLikes.set(favoris.favoris, previousLikeNbr + 1);
                }

            })
        })

    }

    public getFilteredReceipes(): void {
        if (this.allRecipes){
          this.countryOptions = [...new Set(this.allRecipes.map(recipe => recipe.country))];

          this.categoryOptions = [...new Set(this.allRecipes.map(recipe => recipe.category))];

          this.difficultyOptions = [...new Set(this.allRecipes.map(recipe => recipe.difficulty))];
        }


    }


    public loadData(): void {

        this.getAllRecipes();
        this.getLikedRecipesByUser();
        this.getLikesByRecipes();
    }



    public addFavoris(recipeClicked: Recipe): void {


        if (this.currentUser) {
            const recetteBoolean: string | undefined = this.allRecipesList.get(recipeClicked.name);
            const newFavoris: Favoris = new Favoris(recipeClicked.name, this.currentUser.email, recipeClicked.picture);
            const nbrLikes: number | undefined = this.recipeNbrLikes.get(recipeClicked.name);
            if (nbrLikes) {
                if (recetteBoolean === "true") {
                    this.allRecipesList.set(recipeClicked.name, "false");
                    this.recipeNbrLikes.set(recipeClicked.name, nbrLikes - 1);
                    this.favorisService.delFavoris(newFavoris).subscribe();
                } else {
                    this.allRecipesList.set(recipeClicked.name, "true");
                    this.recipeNbrLikes.set(recipeClicked.name, nbrLikes + 1);
                    this.favorisService.addFavoris(newFavoris).subscribe();
                    this.playConfetti();
                }
            }
        } else {
            this.router.navigate(['/login']);
        }

    }

    public playConfetti(): void {
        this.animationService.playConfettiAnimation(50, 2);
        this.animationService.playConfettiAnimation(25, 3);
        this.animationService.playConfettiAnimation(10, 4);
    }

}
