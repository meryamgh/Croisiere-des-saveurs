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

    public recettes : Map<Recette, boolean> = new Map<Recette, boolean>();
    public recipes !: Recette[];
    public term!: string;
    public currentUser!: User;

    constructor(private recetteService: RecetteService, private favorisService : FavorisService) {
        this.loadData()
    }

    public loadData(): void {

      this.recetteService.getRecettes().subscribe(recettesData => {
        this.recipes = recettesData;
        this.recettes = new Map<Recette, boolean>();

        recettesData.forEach((recette: Recette) => {
          this.recettes.set(recette, false);
        });
      });

      const storedUser = sessionStorage.getItem("userLogged");

      if (storedUser) {
        this.currentUser = JSON.parse(storedUser) as User;

        this.favorisService.getFavorisUser(this.currentUser.email).subscribe(favorisData => {
          favorisData.forEach((favoris: Favoris) => {
            this.recettes.set(favoris.favoris, true);
            console.log(this.recettes.get(favoris.favoris));
          });
        });
      }



    }


  getMap() {
    console.log(this.recettes);
  }
}
