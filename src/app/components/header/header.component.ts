import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from "../../models/user.model";
import { UserService } from "../../services/user/user.service";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnDestroy {
  public currentUser: User | null = null;
  private userSubscription: Subscription;

  constructor(private userService: UserService) {
    this.userSubscription = this.userService.getUserSubject().subscribe(user => {
      this.currentUser = user;
    });
  }

  public logOut(): void {
    this.userService.getDeconnected();
  }


  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }
}


