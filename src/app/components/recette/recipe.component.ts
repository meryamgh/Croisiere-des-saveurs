import {Component, OnInit} from '@angular/core';
import {RecetteService} from "../../services/recipe/recette.service";
import {CommentaireService} from "../../services/comment/commentaire.service";
import {Recette} from "../../models/recipe.model";
import {ActivatedRoute, Router} from "@angular/router";
import {Commentaire} from "../../models/comment.model";
import {User} from "../../models/user.model";
import {FavorisService} from "../../services/favoris/favoris.service";
import {Favoris} from "../../models/favoris.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {
  public currentRecipe !: Recette;
  public currentUser!: User;
  public commentsWrite!: Commentaire[];
  public nbrFav !: number;
  public favRecipe: boolean = false;
  public isPopupOpen: boolean = false;
  public usersComments: Map<string, string> = new Map<string, string>;
  public commentForm: FormGroup = this.fb.group({
    comment: ['', Validators.required]
  });

  public constructor(private recipeService: RecetteService, private commentService: CommentaireService,
                     private route: ActivatedRoute, private router: Router,
                     private favorisService: FavorisService,
                     private fb: FormBuilder) {
  }

  public ngOnInit(): void {
    this.getRecipe();
    this.getUser();
  }

  public getRecipe(): void {

    this.route.params.subscribe(params => {
      const recipeId = params['nom'];
      this.recipeService.getRecipeByName(recipeId).subscribe(data => {
        this.currentRecipe = data;
        this.getNbrFavRecipe();

      });
    });
  }

  public getComments(): void {

    this.commentService.getCommentsRecipe(this.currentRecipe.nom).subscribe(data => {
      this.commentsWrite = data;

      data.forEach((comment: Commentaire) => {

        if (this.currentUser) {
          if (comment.user === this.currentUser.email) {
            this.usersComments.set(comment.user, "user-logged");
          } else {
            this.usersComments.set(comment.user, "user-notLogged");
          }
        } else {
          this.usersComments.set(comment.user, "user-notLogged");
        }

      });
    });

  }

  public getNbrFavRecipe(): void {
    this.favorisService.getFavoriteRecipes(this.currentRecipe.nom).subscribe(data =>
      (this.nbrFav = data.length)
    )
    if (this.currentUser) {
      this.favorisService.getFavoriteUserRecipe(this.currentUser.email, this.currentRecipe.nom).subscribe(data => {
          this.favRecipe = data.length !== 0;
        }
      )
    }
  }


  public getUser(): void {
    const storedUser: string | null = sessionStorage.getItem("userLogged");

    if (storedUser) {
      this.currentUser = JSON.parse(storedUser) as User;
    }
  }

  public addToFav(): void {
    if (this.currentUser) {

      const newFavoris: Favoris = new Favoris(this.currentRecipe.nom, this.currentUser.email, this.currentRecipe.picture);
      if (this.favRecipe) {
        this.nbrFav--;
        this.favorisService.delFavoris(newFavoris).subscribe();
      } else {
        this.nbrFav++;
        this.favorisService.addFavoris(newFavoris).subscribe();
      }
      this.favRecipe = !this.favRecipe;
    } else {
      this.router.navigate(['/login']);
    }

  }

  public deleteCommentSend(commentId: number): void {
    this.commentService.deleteComment(commentId).subscribe(() => {
      this.commentsWrite = this.commentsWrite.filter(
        (comment: Commentaire): boolean => comment.idCommentaire !== commentId
      );
    });
  }

  public addNewComment(): void {

    if (this.commentForm.valid) {
      if (this.currentUser) {
        const comment = this.commentForm.get('comment')?.value;
        const commentToAdd:Commentaire = new Commentaire(comment, this.currentUser.email,
          this.currentRecipe.nom, new Date());
        this.usersComments.set(this.currentUser.email, "user-logged");
        this.commentService.addComment(commentToAdd).subscribe();
        this.commentsWrite.push(commentToAdd);
        this.commentForm.reset();


      } else {
        this.router.navigate(['/login']);
      }
    }

  }

  public updateComment(commentToUpdate: Commentaire): void {
    this.commentService.updateComment(commentToUpdate.idCommentaire, commentToUpdate.commentaire)
      .subscribe((updatedComment: Commentaire) => {
        this.commentsWrite = this.commentsWrite.map((comment) => {
          if (comment.idCommentaire === commentToUpdate.idCommentaire) {
            return updatedComment;
          }
          return comment;
        });

      });

  }

  public openPreparationPopup(): void {
    this.isPopupOpen = true;
  }

  public closePreparationPopup(): void {
    this.isPopupOpen = false;
  }

}
