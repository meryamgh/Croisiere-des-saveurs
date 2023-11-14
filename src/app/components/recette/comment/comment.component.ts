import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Commentaire} from "../../../models/comment.model";
import {User} from "../../../models/user.model";
import {Recette} from "../../../models/recipe.model";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent {

  @Input() currentUserSend!: User;
  @Input() commentSend !: Commentaire;
  @Input() currentRecipeSend!: Recette;
  @Output() deleteComment: EventEmitter<number> = new EventEmitter<number>();
  @Output() updateComment: EventEmitter<Commentaire> = new EventEmitter();
  public isEditing: boolean = false;

  public sendUpdateComment(comment: Commentaire): void {
    this.isEditing = false;
    this.updateComment.emit(comment)
  }

  public sendDeleteComment(idComent: number): void {
    this.deleteComment.emit(idComent);
  }

}
