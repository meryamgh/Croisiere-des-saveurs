import {Component} from '@angular/core';
import {UserService} from "../../services/user/user.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {MoveDirection, ClickMode, HoverMode, OutMode, Engine} from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public id:string = "tsparticles";
    public loginForm: FormGroup = this.formBuilder.group({
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
     userNotFound!: boolean;
     incorrectPassword!: boolean;


    public constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) {
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








    particlesOptions =  {
    background: {
      color: {
        value: "#ffffff",
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: ClickMode.push,
        },
        onHover: {
          enable: true,
          mode: HoverMode.repulse,
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: "#044d6e",
      },
      links: {
        color: "#1b6288",
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      move: {
        direction: MoveDirection.none,
        enable: true,
        outModes: {
          default: OutMode.bounce,
        },
        random: false,
        speed: 2,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 80,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 5 },
      },
    },
    detectRetina: true,
  };


  public async particlesInit(engine: Engine): Promise<void> {
    await loadSlim(engine);
  }

}


