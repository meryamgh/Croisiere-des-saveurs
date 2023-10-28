export class Commentaire {
    public commentaire: string;
    public user: string;
    public recette: string;

    constructor(comment: string, userComment: string, recetteCommented: string) {
        this.commentaire = comment;
        this.user = userComment;
        this.recette = recetteCommented;
    }

}
