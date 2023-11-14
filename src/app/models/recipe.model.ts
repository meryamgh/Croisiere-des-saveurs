export class Recette {
    public nom: string;
    public pays: string;
    public contenu: string;
    public categorie: string;
    public temp_preparation: number;
    public ingredients: string;
    public difficulte: string;
    public calorie: number;
    public preparation: string[];
    public picture: string;


    constructor(name: string, country: string, content: string, category: string,
                time: number, elements: string, dificulty: string,
                clr: number, stepsPreparation: string[], image: string) {
        this.nom = name;
        this.pays = country;
        this.contenu = content;
        this.categorie = category;
        this.temp_preparation = time;
        this.ingredients = elements;
        this.difficulte = dificulty;
        this.calorie = clr;
        this.preparation = stepsPreparation;
        this.picture = image;

    }
}
