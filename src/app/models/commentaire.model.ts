export class Commentaire {
  private static dernierId: number = 1;
  public idCommentaire : number;
  public commentaire: string;
  public user: string;
  public recette: string;
  public dateTime: Date;


  constructor(comment: string, userComment: string, recetteCommented: string, date : Date) {
    this.idCommentaire = Commentaire.dernierId++;
    this.commentaire = comment;
    this.user = userComment;
    this.recette = recetteCommented;
    this.dateTime = date;
  }
}

