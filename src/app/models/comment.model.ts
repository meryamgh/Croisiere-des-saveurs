export class Comment {
  private static lastId: number = 1;
  public idComment: number;
  public commentMessage: string;
  public user: string;
  public recipe: string;
  public dateTime: Date;

  constructor(comment: string, userComment: string, recipeCommented: string, date: Date) {
    this.idComment = Comment.lastId++;
    this.commentMessage = comment;
    this.user = userComment;
    this.recipe = recipeCommented;
    this.dateTime = date;
  }
}

