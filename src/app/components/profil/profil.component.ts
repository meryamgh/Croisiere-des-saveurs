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
    public editProfil:boolean = false;
  elseBlock : any;

    public constructor(private userService : UserService) {

    }

    public ngOnInit(): void {
        const storedUser = sessionStorage.getItem("userLogged");

        if (storedUser) {
            this.currentUser = JSON.parse(storedUser) as User;
        }
    }

    public updateProfil(){
      this.editProfil = true;

    }

  validateProfil() {
    this.editProfil = false;
    this.userService.updateUser(this.currentUser).subscribe();
  }
}
