import {Component, OnInit} from '@angular/core';
import { User } from "../../models/user.model";
import { UserService } from "../../services/user/user.service";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public currentUser!: User;

  constructor(private userService: UserService) {
  }

  public logOut(): void {
    this.userService.getDeconnected();
  }


  ngOnInit(): void {

    const storedUser = sessionStorage.getItem("userLogged") ;
    if(storedUser) {
      this.currentUser = JSON.parse(storedUser) as User;

    }
  }
}


