import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Commentaire} from "../../models/commentaire.model";
import {User} from "../../models/user.model";
import {Recette} from "../../models/recette.model";

@Component({
  selector: 'app-commentaire',
  templateUrl: './commentaire.component.html',
  styleUrls: ['./commentaire.component.scss']
})
export class CommentaireComponent {

  @Input() currentUserSend!: User;
  @Input() commentaireSend !: Commentaire;
  @Input() currentReciepieSend!: Recette;
  @Output() deleteComment: EventEmitter<number> = new EventEmitter<number>();
  @Output() updateComment: EventEmitter<Commentaire> = new EventEmitter();
  public isEditing:boolean=false;



  public sendUpdateComment(comment : Commentaire):void{
    this.isEditing = false;
    this.updateComment.emit(comment)
  }

  public sendDeleteComment(idComent :number):void{
    this.deleteComment.emit(idComent);
  }


}
