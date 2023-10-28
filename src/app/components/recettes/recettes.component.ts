import {Component} from '@angular/core';
import {Recette} from "../../models/recette.model";
import {RecetteService} from "../../services/recette/recette.service";
import {User} from "../../models/user.model";
import {Favoris} from "../../models/favoris.model";
import {FavorisService} from "../../services/favoris/favoris.service";


@Component({
    selector: 'app-recettes',
    templateUrl: './recettes.component.html',
    styleUrls: ['./recettes.component.scss']
})
export class RecettesComponent {

    public recettes: Map<string, string> = new Map<string, string>();
    public recipeNbrLikes: Map<string, number> = new Map<string, number>();
    public recipes !: Recette[];
    public term!: string;
    public currentUser!: User;

    constructor(private recetteService: RecetteService, private favorisService: FavorisService) {
        this.loadData()
    }

    public getAllRecipes() {
        this.recetteService.getRecettes().subscribe(recettesData => {
            this.recipes = recettesData;

            recettesData.forEach((recette: Recette) => {
                this.recettes.set(recette.nom, "false");
                this.recipeNbrLikes.set(recette.nom, 0);
            });
        });
    }

    public getLikedRecipesByUser() {
        const storedUser = sessionStorage.getItem("userLogged");
        if (storedUser) {
            this.currentUser = JSON.parse(storedUser) as User;

            this.favorisService.getFavorisUser(this.currentUser.email).subscribe(favorisData => {
                favorisData.forEach((favoris: Favoris) => {
                    this.recettes.set(favoris.favoris, "true");
                    console.log(this.recettes.get(favoris.favoris));
                });
            });
        }
    }

    public getLikesByRecipes() {
        this.favorisService.getFavoris().subscribe(data => {
            data.forEach((favoris: Favoris) => {
                console.log("ici")
                const previousLikeNbr = this.recipeNbrLikes.get(favoris.favoris);
                console.log(previousLikeNbr)
                if (previousLikeNbr != undefined) {
                    console.log("ertghbvcx");
                    this.recipeNbrLikes.set(favoris.favoris, previousLikeNbr + 1);
                }

            })
        })

    }


    public loadData(): void {

        this.getAllRecipes();
        this.getLikedRecipesByUser();
        this.getLikesByRecipes();

    }


    getMap() {
        console.log(this.recettes);
        console.log(this.recipeNbrLikes);

    }

    addFavoris(recetteClicked: Recette) {
        const recetteBoolean = this.recettes.get(recetteClicked.nom);
        const newFavoris = new Favoris(recetteClicked.nom, this.currentUser.email);
        const nbrLikes = this.recipeNbrLikes.get(recetteClicked.nom);
        if (nbrLikes != undefined) {
            if (recetteBoolean === "true") {
                this.recettes.set(recetteClicked.nom, "false");
                this.recipeNbrLikes.set(recetteClicked.nom, nbrLikes - 1);
                this.favorisService.delFavoris(newFavoris).subscribe();
            } else {
                this.recettes.set(recetteClicked.nom, "true");
                this.recipeNbrLikes.set(recetteClicked.nom, nbrLikes + 1);
                this.favorisService.addFavoris(newFavoris).subscribe();
            }
        }


    }
}
