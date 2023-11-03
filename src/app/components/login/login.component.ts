import {Component} from '@angular/core';
import {UserService} from "../../services/user/user.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {

    public loginForm: FormGroup = this.formBuilder.group({
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });

    public constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) {
    }


    public onSubmit() {
        if (this.loginForm.valid) {

            const email = this.loginForm.value.email;
            const password = this.loginForm.value.password;
            this.userService.getUser(email).subscribe(data => {
                if (data == null) {
                    alert("erreur");
                } else {
                    if (data.password == password) {
                        this.userService.isLogged(data);
                        this.router.navigate(['/Accueil']);
                    } else {
                        alert("mot de passe incorrect");
                    }
                }
            });


        }
    }


}


