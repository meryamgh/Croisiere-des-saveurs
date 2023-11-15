import {Component, Input} from '@angular/core';
import {User} from "../../models/user.model";
import {UserService} from "../../services/user/user.service";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Input() currentUser: User | undefined;
  @Input() isLoggedIn: boolean = false;

  public constructor(private userService: UserService) {
  }

  public logOut(): void {
    this.userService.getDeconnected();
    this.isLoggedIn = false;
    this.currentUser = undefined;
  }

}


