import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Comment} from "../../../models/comment.model";
import {User} from "../../../models/user.model";
import {Recipe} from "../../../models/recipe.model";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent {

  @Input() currentUserSend!: User;
  @Input() commentSend !: Comment;
  @Input() currentRecipeSend!: Recipe;
  @Input() userCommentSend: User | undefined;
  @Output() deleteComment: EventEmitter<number> = new EventEmitter<number>();
  @Output() updateComment: EventEmitter<Comment> = new EventEmitter();
  public isEditing: boolean = false;

  public sendUpdateComment(comment: Comment): void {
    this.isEditing = false;
    this.updateComment.emit(comment)
  }

  public sendDeleteComment(idComent: number): void {
    this.deleteComment.emit(idComent);
  }


}
