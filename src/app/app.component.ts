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

    constructor(private userService: UserService) {
    }

    public logOut(): void {
        this.userService.getDeconnected();
        this.currentUser = undefined;
    }


    ngOnInit(): void {
        this.userService.getUserSubject().subscribe((user) => {
            if (user) {
                this.currentUser = user;
            }
        });
        this.logOut();
    }
}

