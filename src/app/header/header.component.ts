import {Component} from '@angular/core';
import {User} from "../models/user.model";
import {UserService} from "../services/user/user.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public currentUser !: User | null;
  elseblock: any;

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {

    const storedUser = sessionStorage.getItem("userLogged");

    if (storedUser) {
      this.currentUser = JSON.parse(storedUser) as User;
    }
  }

  public logOut() {
    this.currentUser = null;
    this.userService.getDeconnected();
  }
}



