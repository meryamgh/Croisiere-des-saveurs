import {Component, OnInit} from '@angular/core';
import {UserService} from "./services/user/user.service";
import {User} from "./models/user.model";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
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

