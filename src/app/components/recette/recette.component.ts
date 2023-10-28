import {Component} from '@angular/core';
import {RecetteService} from "../../services/recette/recette.service";
import {CommentaireService} from "../../services/commentaire/commentaire.service";
import {Recette} from "../../models/recette.model";
import {ActivatedRoute, Router} from "@angular/router";
import {Commentaire} from "../../models/commentaire.model";
import {User} from "../../models/user.model";

@Component({
    selector: 'app-recette',
    templateUrl: './recette.component.html',
    styleUrls: ['./recette.component.scss']
})
export class RecetteComponent {
    public currentReciepie !: Recette;
    public commentaires !: Commentaire[];
    public newComment!: string;
    public currentUser!: User;

    constructor(private recetteService: RecetteService, private commentaireService: CommentaireService,
                private route: ActivatedRoute, private router: Router) {
        this.getReciepie();
    }


    public getReciepie() {
        this.route.params.subscribe(params => {
            const recetteId = params['nom'];
            this.recetteService.getRecette(recetteId).subscribe(data =>
                (this.currentReciepie = data)
            )
        });

    }


    public getComments() {
        console.log((this.currentReciepie));
        this.commentaireService.getCommentsRecipie(this.currentReciepie.nom).subscribe(data =>
            (this.commentaires = data)
        );
        console.log(this.commentaires);

    }

    public ajoutCommentaire() {
        const storedUser = sessionStorage.getItem("userLogged");

        if (storedUser) {
            this.currentUser = JSON.parse(storedUser) as User;
            const commentToAdd = new Commentaire(this.newComment, this.currentUser.email, this.currentReciepie.nom);
            this.commentaireService.addComment(commentToAdd).subscribe();
            this.commentaires.push(commentToAdd);
        } else {
            this.router.navigate(['/login']);
        }

    }
}
