import {Component, OnInit} from '@angular/core';
import {User} from "../../models/user.model";
import {UserService} from "../../services/user/user.service";

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {
  public currentUser!: User;
  public editProfil: boolean = false;

  public constructor(private userService: UserService) {
  }

  public ngOnInit(): void {
    const storedUser: string | null = sessionStorage.getItem("userLogged");
    if (storedUser) {
      this.currentUser = JSON.parse(storedUser) as User;
    }
  }

  public updateProfil(): void {
    this.editProfil = true;
  }

  public validateProfil(): void {
    this.editProfil = false;
    this.userService.updateUser(this.currentUser).subscribe();
    this.userService.setUserSubject(this.currentUser);
    sessionStorage.setItem("userLogged", JSON.stringify(this.currentUser));
  }
}
