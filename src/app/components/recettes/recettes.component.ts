import {Component} from '@angular/core';
import {Recette} from "../../models/recette.model";
import {RecetteService} from "../../services/recette/recette.service";
import {User} from "../../models/user.model";
import {Favoris} from "../../models/favoris.model";
import {FavorisService} from "../../services/favoris/favoris.service";
import {recettes} from "../../data/data-loader-recettes";


@Component({
    selector: 'app-recettes',
    templateUrl: './recettes.component.html',
    styleUrls: ['./recettes.component.scss']
})
export class RecettesComponent {

    public recettes : Map<string, string> = new Map<string, string>();
    public recipes !: Recette[];
    public term!: string;
    public currentUser!: User;

    constructor(private recetteService: RecetteService, private favorisService : FavorisService) {
        this.loadData()
    }

    public loadData(): void {

        this.recetteService.getRecettes().subscribe(recettesData => {
            this.recipes = recettesData;

            recettesData.forEach((recette: Recette) => {
                this.recettes.set(recette.nom, "false");
            });
        });

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


    getMap() {
    console.log(this.recettes);

  }

    addFavoris(recetteClicked : Recette) {
        const recetteBoolean = this.recettes.get(recetteClicked.nom);
        const newFavoris = new Favoris(recetteClicked.nom,this.currentUser.email);
        if(recetteBoolean === "true"){
            this.recettes.set(recetteClicked.nom,"false");
            this.favorisService.delFavoris(newFavoris).subscribe();
        }else{
            this.recettes.set(recetteClicked.nom,"true");

            this.favorisService.addFavoris(newFavoris).subscribe();
        }


    }
}
