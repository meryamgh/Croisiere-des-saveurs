import {Component, OnDestroy, OnInit} from '@angular/core';
import { User } from "../../models/user.model";
import { UserService } from "../../services/user/user.service";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  public currentUser: User | null = null;
  private userSubscription!: Subscription;

  constructor(private userService: UserService) {
  }

  public logOut(): void {
    this.userService.getDeconnected();
  }


  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.userSubscription = this.userService.getUserSubject().subscribe(user => {
      this.currentUser = user;
    });
  }
}


