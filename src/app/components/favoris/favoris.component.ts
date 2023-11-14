import {Component, OnInit} from '@angular/core';
import {User} from "../../models/user.model";
import {Favoris} from "../../models/favoris.model";
import {FavorisService} from "../../services/favoris/favoris.service";


@Component({
  selector: 'app-favoris',
  templateUrl: './favoris.component.html',
  styleUrls: ['./favoris.component.scss']
})
export class FavorisComponent implements OnInit {
  public favoris: Favoris[] = [];
  private currentUser!: User;


  public constructor(private favorisService: FavorisService) {
  }


  public getFavoris(): void {

    const storedUser: string | null = sessionStorage.getItem("userLogged");
    if (storedUser) {
      this.currentUser = JSON.parse(storedUser) as User;
      this.favorisService.getFavorisUser(this.currentUser.email).subscribe(data =>
        (this.favoris = data)
      )
    }


  }

  public deleteFavoris(favItem: Favoris): void {
    this.favorisService.delFavoris(favItem).subscribe();
    this.favoris = this.favoris.filter(item => item !== favItem);
  }

  public ngOnInit(): void {
    this.getFavoris();
  }

}
