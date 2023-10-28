import {Component} from '@angular/core';
import {Recette} from "../../models/recette.model";
import {recettes} from "../../data/data-loader-recettes";
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

    paysFiltre: string = '';
    categorieFiltre: string = '';
    difficulteFiltre: string = '';

    paysOptions: string[] = [];
    categorieOptions: string[] = [];
    difficulteOptions: string[] = [];

    public allRecipes !: Recette[];

    constructor(private recetteService: RecetteService, private favorisService: FavorisService) {
        this.loadData()
    }

    public getAllRecipes() {
        this.recetteService.getRecettes().subscribe(recettesData => {
            this.recipes = recettesData;
            this.allRecipes = recettesData;
            recettesData.forEach((recette: Recette) => {
                this.recettes.set(recette.nom, "false");
                this.recipeNbrLikes.set(recette.nom, 0);
            });
        });
    }

    appliquerFiltres(): void {
            this.recipes = this.allRecipes;
            const resultatsFiltres: Recette[] = this.recipes.filter((recette: Recette) => {
            const passeFiltrePays = !this.paysFiltre || recette.pays === this.paysFiltre;
            const passeFiltreCategorie = !this.categorieFiltre || recette.categorie === this.categorieFiltre;
            const passeFiltreDifficulte = !this.difficulteFiltre || recette.difficulte === this.difficulteFiltre;

            return passeFiltrePays && passeFiltreCategorie && passeFiltreDifficulte;
        });

        this.recipes = resultatsFiltres;
    }

    public getLikedRecipesByUser() {
        const storedUser = sessionStorage.getItem("userLogged");
        if (storedUser) {
            this.currentUser = JSON.parse(storedUser) as User;

            this.favorisService.getFavorisUser(this.currentUser.email).subscribe(favorisData => {
                favorisData.forEach((favoris: Favoris) => {
                    this.recettes.set(favoris.favoris, "true");
                });
            });
        }
    }

    public getLikesByRecipes() {
        this.favorisService.getFavoris().subscribe(data => {
            data.forEach((favoris: Favoris) => {
                const previousLikeNbr = this.recipeNbrLikes.get(favoris.favoris);
                if (previousLikeNbr != undefined) {
                    this.recipeNbrLikes.set(favoris.favoris, previousLikeNbr + 1);
                }

            })
        })

    }

    public getFilteredReceipes() {

        this.paysOptions = [...new Set(recettes.map(recette => recette.pays))];

        this.categorieOptions = [...new Set(recettes.map(recette => recette.categorie))];

        this.difficulteOptions = [...new Set(recettes.map(recette => recette.difficulte))];

    }


    public loadData(): void {

        this.getAllRecipes();
        this.getLikedRecipesByUser();
        this.getLikesByRecipes();
        this.getFilteredReceipes();
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
