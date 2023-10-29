import {Component} from '@angular/core';
import {RecetteService} from "../../services/recette/recette.service";
import {CommentaireService} from "../../services/commentaire/commentaire.service";
import {Recette} from "../../models/recette.model";
import {ActivatedRoute, Router} from "@angular/router";
import {Commentaire} from "../../models/commentaire.model";
import {User} from "../../models/user.model";
import {FavorisService} from "../../services/favoris/favoris.service";
import {Favoris} from "../../models/favoris.model";
import {UserService} from "../../services/user/user.service";

@Component({
  selector: 'app-recette',
  templateUrl: './recette.component.html',
  styleUrls: ['./recette.component.scss']
})
export class RecetteComponent {
  public currentReciepie !: Recette;
  public commentaires !: Commentaire[];
  public userComments !: Commentaire[];
  public usersComments = new Map<string, string>;
  public newComment!: string;
  public currentUser!: User;
  public nbrFav !: number;
  public recetteFav: boolean = false;

  constructor(private recetteService: RecetteService, private commentaireService: CommentaireService,
              private route: ActivatedRoute, private router: Router,
              private favorisService: FavorisService, private userService : UserService) {
    this.getReciepie();
    this.getUser();
  }


  public getReciepie() {
    this.route.params.subscribe(params => {
      const recetteId = params['nom'];
      this.recetteService.getRecette(recetteId).subscribe(data => {
        this.currentReciepie = data;
        this.getNbrFavRecette();
      });
    });
  }


  public getNbrFavRecette() {
    this.favorisService.getFavorisRecette(this.currentReciepie.nom).subscribe(data =>
      (this.nbrFav = data.length)
    )
    this.favorisService.getFavorisUserRecette(this.currentUser.email, this.currentReciepie.nom).subscribe(data => {
        this.recetteFav = data.length !== 0;
      }
    )
  }


  public getComments() {
    this.commentaireService.getCommentsRecipie(this.currentReciepie.nom).subscribe(data => {
      this.commentaires = data;
      data.forEach((comment: Commentaire) => {
        if(comment.user === this.currentUser.email){
          alert("okkokok")
          this.usersComments.set(comment.user, "user-logged");
        }else{
          this.usersComments.set(comment.user, "user-notLogged");
        }

      });
    });
  }


  public getUser() {
    const storedUser = sessionStorage.getItem("userLogged");

    if (storedUser) {
      this.currentUser = JSON.parse(storedUser) as User;
    }
  }

  public ajoutCommentaire() {

    if (this.currentUser) {

      const commentToAdd = new Commentaire(this.newComment, this.currentUser.email, this.currentReciepie.nom, new Date());
      this.usersComments.set(this.currentUser.email, "user-logged");
      this.commentaireService.addComment(commentToAdd).subscribe();
      this.commentaires.push(commentToAdd);
    } else {
      this.router.navigate(['/login']);
    }

  }

  public addToFav() {
    if (this.currentUser) {
      const newFavoris = new Favoris(this.currentReciepie.nom, this.currentUser.email);
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
}
