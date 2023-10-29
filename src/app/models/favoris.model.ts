export class Favoris {
    public favoris: string;
    public user: string;

    constructor(favorisFav: string, userFav: string) {
        this.favoris = favorisFav;
        this.user = userFav;
    }
}
