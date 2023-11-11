import {Component, OnInit} from '@angular/core';
import {RecetteService} from "../../services/recette/recette.service";
import {CommentaireService} from "../../services/commentaire/commentaire.service";
import {Recette} from "../../models/recette.model";
import {ActivatedRoute, Router} from "@angular/router";
import {Commentaire} from "../../models/commentaire.model";
import {User} from "../../models/user.model";
import {FavorisService} from "../../services/favoris/favoris.service";
import {Favoris} from "../../models/favoris.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-recette',
  templateUrl: './recette.component.html',
  styleUrls: ['./recette.component.scss']
})
export class RecetteComponent implements OnInit{
  public currentReciepie !: Recette;
  public currentUser!: User;
  public commentaires!:Commentaire[];
  public nbrFav !: number;
  public recetteFav: boolean = false;
  etapesPreparationPopupOpen: boolean = false;

  public usersComments: Map<string,string> = new Map<string, string>;
  public commentaireForm:FormGroup = this.fb.group({
    commentaire: ['', Validators.required]
  });

  public constructor(private recetteService: RecetteService, private commentaireService : CommentaireService,
                     private route: ActivatedRoute, private router: Router,
                     private favorisService: FavorisService,
                     private fb: FormBuilder) {
  }

  public getReciepie():void {

    this.route.params.subscribe(params => {
      const recetteId = params['nom'];
      this.recetteService.getRecette(recetteId).subscribe(data => {
        this.currentReciepie = data;
        this.getNbrFavRecette();

      });
    });
  }

  public getComments():void {

      this.commentaireService.getCommentsRecipie(this.currentReciepie.nom).subscribe(data => {
        this.commentaires = data;

        data.forEach((comment: Commentaire) => {

          if(this.currentUser) {
            if (comment.user === this.currentUser.email) {
              this.usersComments.set(comment.user, "user-logged");
            } else {
              this.usersComments.set(comment.user, "user-notLogged");
            }
          }else{
            this.usersComments.set(comment.user, "user-notLogged");
          }

        });
      });

  }


  public getNbrFavRecette():void {
    this.favorisService.getFavorisRecette(this.currentReciepie.nom).subscribe(data =>
      (this.nbrFav = data.length)
    )
    if(this.currentUser) {
      this.favorisService.getFavorisUserRecette(this.currentUser.email, this.currentReciepie.nom).subscribe(data => {
          this.recetteFav = data.length !== 0;
        }
      )
    }
  }




  public getUser():void {
    const storedUser = sessionStorage.getItem("userLogged");

    if (storedUser) {
      this.currentUser = JSON.parse(storedUser) as User;
    }
  }



  public addToFav():void {
    if (this.currentUser) {

      const newFavoris = new Favoris(this.currentReciepie.nom, this.currentUser.email, this.currentReciepie.picture);
      if (this.recetteFav) {
        this.nbrFav--;
        this.favorisService.delFavoris(newFavoris).subscribe();
      } else {
        this.nbrFav++;
        this.favorisService.addFavoris(newFavoris).subscribe();
      }
      this.recetteFav = !this.recetteFav;
    } else {
      this.router.navigate(['/login']);
    }

  }

  public deleteCommentaireSend(commentId: number): void {
    this.commentaireService.deleteComment(commentId).subscribe(() => {
      this.commentaires = this.commentaires.filter(
        (comment:Commentaire):boolean => comment.idCommentaire !== commentId
      );
    });
  }

  public ajoutCommentaire():void {

    if (this.commentaireForm.valid) {
      if (this.currentUser) {
        const commentaire = this.commentaireForm.get('commentaire')?.value;
        const commentToAdd = new Commentaire(commentaire, this.currentUser.email,
          this.currentReciepie.nom, new Date());
        this.usersComments.set(this.currentUser.email, "user-logged");
        this.commentaireService.addComment(commentToAdd).subscribe();
        this.commentaires.push(commentToAdd);
        this.commentaireForm.reset();


      } else {
        this.router.navigate(['/login']);
      }
    }

  }

  ngOnInit(): void {
    this.getReciepie();
    this.getUser();
  }

  public updateCommentaire(commentToUpdate: Commentaire):void {
    this.commentaireService.updateComment(commentToUpdate.idCommentaire,commentToUpdate.commentaire)
      .subscribe((updatedComment:Commentaire) => {
        this.commentaires = this.commentaires.map((comment) => {
          if (comment.idCommentaire === commentToUpdate.idCommentaire) {
            return updatedComment;
          }
          return comment;
        });

      });


  }

  public openPreparationPopup() {
    this.etapesPreparationPopupOpen = true;
  }

  public fermerPreparationPopup() {
    this.etapesPreparationPopupOpen = false;
  }

}
