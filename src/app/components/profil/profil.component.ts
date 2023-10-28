import {Component, OnInit} from '@angular/core';
import {User} from "../../models/user.model";


@Component({
    selector: 'app-profil',
    templateUrl: './profil.component.html',
    styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {
    public currentUser!: User;

    constructor() {
    }

    ngOnInit(): void {
        const storedUser = sessionStorage.getItem("userLogged");

        if (storedUser) {
            this.currentUser = JSON.parse(storedUser) as User;
        }
    }


}
