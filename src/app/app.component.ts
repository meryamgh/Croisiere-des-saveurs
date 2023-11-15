import {Component, Input, OnInit} from '@angular/core';
import {User} from "./models/user.model";
import {UserService} from "./services/user/user.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title: string = "Croisiere-des-Saveurs"

  @Input() currentUser: User | undefined;

  public constructor(private userService: UserService) {
  }

  public ngOnInit(): void {
    this.userService.getUserSubject().subscribe((user) => {
      if (user) {
        this.currentUser = user;
      }
    });
    this.logOut();
  }

  public logOut(): void {
    this.userService.getDeconnected();
    this.currentUser = undefined;
  }

}

