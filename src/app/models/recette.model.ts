export class Recette {
    nom: string;
    pays: string;
    contenu: string;
    categorie: string;   //entrée plat dessert
    temp_preparation: number;
    ingredients: string;
    difficulte: string;
    calorie: number;
    commentaire!: string[];


    constructor(name: string, country: string, content: string, category: string,
                time: number, elements: string, dificulty: string,
                clr: number, comments: string[]) {
        this.nom = name;
        this.pays = country;
        this.contenu = content;
        this.categorie = category;
        this.temp_preparation = time;
        this.ingredients = elements;
        this.difficulte = dificulty;
        this.calorie = clr;
        this.commentaire = comments;


    }


}
