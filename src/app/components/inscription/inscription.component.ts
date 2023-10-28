import {Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../services/user/user.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-inscription',
    templateUrl: './inscription.component.html',
    styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent {

    public inscriptionForm: FormGroup = this.formBuilder.group({
        nom: new FormControl('', [Validators.required]),
        prenom: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });

    constructor(private formBuilder: FormBuilder, private router: Router,
                private userService: UserService) {
    }

    public onSubmit() {
        if (this.inscriptionForm.valid) {

            alert("ok");
            this.userService.createUser(this.inscriptionForm.value).subscribe();
            this.router.navigate(['/login']);
        }
    }

}
