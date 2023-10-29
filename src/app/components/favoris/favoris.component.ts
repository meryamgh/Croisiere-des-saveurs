import { Component } from '@angular/core';
import {User} from "../../models/user.model";
import {Favoris} from "../../models/favoris.model";
import {FavorisService} from "../../services/favoris/favoris.service";

@Component({
  selector: 'app-favoris',
  templateUrl: './favoris.component.html',
  styleUrls: ['./favoris.component.scss']
})
export class FavorisComponent {
  public favoris !: Favoris[];
  public currentUser!: User;

  public constructor(private favorisService: FavorisService) {
    this.getFavoris();
  }


  public getFavoris() {

    const storedUser = sessionStorage.getItem("userLogged");
      if(storedUser) {
        this.currentUser = JSON.parse(storedUser) as User;
        this.favorisService.getFavorisUser(this.currentUser.email).subscribe(data =>
            (this.favoris = data)
        )
      }
    };

}
