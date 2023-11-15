import {Component, OnInit} from '@angular/core';
import {RecipeService} from "../../services/recipe/recipe.service";
import {CommentService} from "../../services/comment/comment.service";
import {Recipe} from "../../models/recipe.model";
import {ActivatedRoute, Router} from "@angular/router";
import {Comment} from "../../models/comment.model";
import {User} from "../../models/user.model";
import {FavorisService} from "../../services/favoris/favoris.service";
import {Favoris} from "../../models/favoris.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../services/user/user.service";

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {

  public currentRecipe !: Recipe;
  public isCommentsPopupOpen: boolean = false;
  public currentUserLogged!: User;
  public commentsWrite!: Comment[];
  public currentUserComment:User[] = [];
  public nbrFav !: number;
  public favRecipe: boolean = false;
  public isPopupOpen: boolean = false;
  public usersComments: Map<string, string> = new Map<string, string>;
  public commentForm: FormGroup = this.fb.group({
    comment: ['', Validators.required]
  });

  public constructor(private recipeService: RecipeService,
                     private commentService: CommentService,
                     private route: ActivatedRoute,
                     private router: Router,
                     private userService: UserService,
                     private favorisService: FavorisService,
                     private fb: FormBuilder) {
  }

  public ngOnInit(): void {
    this.getRecipe();
    this.getUser();
  }

  public openPreparationPopup(): void {
    this.isPopupOpen = true;
  }

  public closePreparationPopup(): void {
    this.isPopupOpen = false;
  }

  public openCommentsPopup(): void {
    this.getComments();
    this.isCommentsPopupOpen = true;
  }

  public closeCommentsPopup(): void {
    this.isCommentsPopupOpen = false;
  }

  public getRecipe(): void {
    this.route.params.subscribe(params => {
      const recipeId = params['nom'];
      this.recipeService.getRecipeByName(recipeId)
        .subscribe(data => {
          this.currentRecipe = data;
          this.getNbrFavRecipe();
        });
    });
  }

  public getComments(): void {

    this.commentService.getCommentsRecipe(this.currentRecipe.name)
      .subscribe(data => {
        this.commentsWrite = data;
        data.forEach((comment: Comment) => {
          this.userService.getUser(comment.user).subscribe(dataUser =>{
              this.currentUserComment.push(dataUser);
          })
          if (this.currentUserLogged) {
            if (comment.user === this.currentUserLogged.email) {
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
    this.favorisService.getFavoriteRecipes(this.currentRecipe.name)
      .subscribe(data =>
        (this.nbrFav = data.length)
      )
    if (this.currentUserLogged) {
      this.favorisService.getFavoriteUserRecipe(
        this.currentUserLogged.email, this.currentRecipe.name)
        .subscribe(data => {
            this.favRecipe = data.length !== 0;
          }
        )
    }
  }

  public getUser(): void {
    const storedUser: string | null = sessionStorage.getItem("userLogged");
    if (storedUser) {
      this.currentUserLogged = JSON.parse(storedUser) as User;
    }
  }

  public addToFav(): void {
    if (this.currentUserLogged) {
      const newFavoris: Favoris = new Favoris(
        this.currentRecipe.name, this.currentUserLogged.email, this.currentRecipe.picture);
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
        (comment: Comment): boolean => comment.idComment !== commentId
      );
    });
  }

  public addNewComment(): void {

    if (this.commentForm.valid) {
      if (this.currentUserLogged) {
        const comment = this.commentForm.get('comment')?.value;
        const commentToAdd: Comment = new Comment(comment, this.currentUserLogged.email,
          this.currentRecipe.name, new Date());
        this.usersComments.set(this.currentUserLogged.email, "user-logged");
        this.commentService.addComment(commentToAdd).subscribe();
        this.commentsWrite.push(commentToAdd);
        this.currentUserComment.push(this.currentUserLogged);
        this.commentForm.reset();

      } else {
        this.router.navigate(['/login']);
      }
    }

  }

  public updateComment(commentToUpdate: Comment): void {
    this.commentService.updateComment(
      commentToUpdate.idComment, commentToUpdate.commentMessage)
      .subscribe((updatedComment: Comment) => {
        this.commentsWrite = this.commentsWrite.map((comment) => {
          if (comment.idComment === commentToUpdate.idComment) {
            return updatedComment;
          }
          return comment;
        });
      });
  }
}
