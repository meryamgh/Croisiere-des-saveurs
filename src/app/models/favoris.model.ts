export class Favoris {
    public favoris: string;
    public user: string;
    public picture: string;

    constructor(favorisFav: string, userFav: string, pictureFav: string) {
        this.favoris = favorisFav;
        this.user = userFav;
        this.picture = pictureFav;
    }
}
