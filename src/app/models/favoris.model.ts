import {Recette} from "./recette.model";
import {FavorisComponent} from "../components/favoris/favoris.component";

export class Favoris {
    public favoris: Recette;
    public user: string;

    constructor(favorisFav: Recette, userFav: string) {
        this.favoris = favorisFav;
        this.user = userFav;
    }
}
