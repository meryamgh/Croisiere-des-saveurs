import {Component, OnInit} from '@angular/core';
import {UserService} from "./services/user/user.service";
import {User} from "./models/user.model";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title : string = "Croisiere-des-Saveurs"
}

