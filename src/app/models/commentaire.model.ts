export class Commentaire {
  public commentaire: string;
  public user: string;
  public recette: string;
  public dateTime: Date;
  constructor(comment: string, userComment: string, recetteCommented: string, date : Date) {
    this.commentaire = comment;
    this.user = userComment;
    this.recette = recetteCommented;
    this.dateTime = date;
  }
}

