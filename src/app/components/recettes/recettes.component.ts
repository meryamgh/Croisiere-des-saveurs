import {Component, OnInit} from '@angular/core';
import {Recette} from "../../models/recette.model";
import {recettes} from "../../data/data-loader-recettes";
import {RecetteService} from "../../services/recette/recette.service";
import {User} from "../../models/user.model";
import {Favoris} from "../../models/favoris.model";
import {FavorisService} from "../../services/favoris/favoris.service";
import {Router} from "@angular/router";
import {AnimationService} from "../../services/animations/animation.service";


@Component({
    selector: 'app-recettes',
    templateUrl: './recettes.component.html',
    styleUrls: ['./recettes.component.scss']
})
export class RecettesComponent implements OnInit {

    public recettes: Map<string, string> = new Map<string, string>();
    public recipeNbrLikes: Map<string, number> = new Map<string, number>();
    public recipes !: Recette[];
    public term!: string;
    private currentUser!: User;

    public paysFiltre: string = "";
    public categorieFiltre: string = "";
    public difficulteFiltre: string = "";
    public tempsPreparationFiltre!: number;

    public paysOptions!: string[];
    public categorieOptions!: string[];
    public difficulteOptions!: string[];


    public allRecipes !: Recette[];

    public constructor(private recetteService: RecetteService, private favorisService: FavorisService,
                       private router: Router, private animationService: AnimationService) {
    }

    public getAllRecipes(): void {
        this.recetteService.getRecettes().subscribe(recettesData => {
            this.recipes = recettesData;
            this.allRecipes = recettesData;
            recettesData.forEach((recette: Recette) => {
                this.recettes.set(recette.nom, "false");
                this.recipeNbrLikes.set(recette.nom, 0);
            });
        });
    }

    public appliquerFiltres(): void {
        this.recipes = this.allRecipes;
        this.recipes = this.recipes.filter((recette: Recette) => {
            const passeFiltrePays: boolean = !this.paysFiltre || recette.pays === this.paysFiltre;
            const passeFiltreCategorie: boolean = !this.categorieFiltre || recette.categorie === this.categorieFiltre;
            const passeFiltreDifficulte: boolean = !this.difficulteFiltre || recette.difficulte === this.difficulteFiltre;
            const passeFiltreTempsPreparation: boolean = !this.tempsPreparationFiltre || recette.temp_preparation <= this.tempsPreparationFiltre;
            return passeFiltrePays && passeFiltreCategorie && passeFiltreDifficulte && passeFiltreTempsPreparation;
        });
    }

    public getLikedRecipesByUser(): void {
        const storedUser: string | null = sessionStorage.getItem("userLogged");
        if (storedUser) {
            this.currentUser = JSON.parse(storedUser) as User;

            this.favorisService.getFavorisUser(this.currentUser.email).subscribe(favorisData => {

                favorisData.forEach((favoris: Favoris) => {
                    this.recettes.set(favoris.favoris, "true");
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

    public addFavoris(recetteClicked: Recette): void {


        if (this.currentUser) {
            const recetteBoolean: string | undefined = this.recettes.get(recetteClicked.nom);
            const newFavoris: Favoris = new Favoris(recetteClicked.nom, this.currentUser.email, recetteClicked.picture);
            const nbrLikes: number | undefined = this.recipeNbrLikes.get(recetteClicked.nom);
            if (nbrLikes != undefined) {
                if (recetteBoolean === "true") {
                    this.recettes.set(recetteClicked.nom, "false");
                    this.recipeNbrLikes.set(recetteClicked.nom, nbrLikes - 1);
                    this.favorisService.delFavoris(newFavoris).subscribe();
                } else {
                    this.recettes.set(recetteClicked.nom, "true");
                    this.recipeNbrLikes.set(recetteClicked.nom, nbrLikes + 1);
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

    ngOnInit(): void {
        this.loadData();
    }
}
