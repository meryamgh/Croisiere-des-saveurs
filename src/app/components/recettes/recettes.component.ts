import {Component} from '@angular/core';
import {Recette} from "../../models/recette.model";
import {RecetteService} from "../../services/recette/recette.service";
import {User} from "../../models/user.model";
import {Favoris} from "../../models/favoris.model";
import {FavorisService} from "../../services/favoris/favoris.service";
import {favoris, favorisData} from "../../data/data-loader-favoris";

@Component({
    selector: 'app-recettes',
    templateUrl: './recettes.component.html',
    styleUrls: ['./recettes.component.scss']
})
export class RecettesComponent {

    public recettes !: Map<Recette, boolean>;
    public term!: string;
    public currentUser!: User;

    constructor(private recetteService: RecetteService, private favorisService : FavorisService) {
        this.loadData()
    }

    public loadData(): void {
        this.recetteService.getRecettes().subscribe(data =>
            (data.forEach((recette: Recette) => {
                this.recettes.set(recette, false);
            })));
        const storedUser = sessionStorage.getItem("userLogged");
        if (storedUser) {
            this.currentUser = JSON.parse(storedUser) as User;
            this.favorisService.getFavorisUser(this.currentUser.email).subscribe(data =>
                (data.forEach((favoris: Favoris) => {
                    this.recettes.set(favoris.favoris, true);
                })))
        }
    }


    protected readonly favoris = favoris;
}
