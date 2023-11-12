import {Component} from '@angular/core';
import {UserService} from "../../services/user/user.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {Container, Engine} from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";
import { particlesOptionsAnimation } from './particles.config';


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
    public userNotFound!: boolean;
    public incorrectPassword!: boolean;
    public particlesOptions = particlesOptionsAnimation;

    public constructor(private formBuilder: FormBuilder,
                       private userService: UserService, private router: Router) {
    }




    public onSubmit(): void {
        if (this.loginForm.valid) {
            const email = this.loginForm.value.email;
            const password = this.loginForm.value.password;

            this.userService.getUser(email).subscribe(data => {
                if (data == null) {
                    this.userNotFound = true;
                    this.incorrectPassword = false;
                } else {
                    if (data.password == password) {
                        this.userService.isLogged(data);
                        this.router.navigate(['/Accueil']);
                    } else {
                        this.userNotFound = false;
                        this.incorrectPassword = true;
                    }
                }
            });
        }
    }




    async particlesInit(engine: Engine): Promise<void> {
        const domArray:Container[] = engine.dom();
        if (domArray.length > 0) {
            domArray.splice(0, 1);
        }
        await loadSlim(engine);
    }


}


