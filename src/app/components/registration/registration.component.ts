import {Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../services/user/user.service";
import {Router} from "@angular/router";
import {Container, Engine} from "tsparticles-engine";
import {loadSlim} from "tsparticles-slim";
import {particlesOptionsAnimation} from '../../config/particles.config';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {

  public registrationForm: FormGroup = this.formBuilder.group({
    lastName: new FormControl('', [Validators.required]),
    firstName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });
  public userAlreadyExists!: boolean;
  public particlesOptions = particlesOptionsAnimation;

  public constructor(private formBuilder: FormBuilder, private router: Router,
                     private userService: UserService) {
  }

  public onSubmit(): void {

    this.userService.getUser(this.registrationForm.get('email')?.value).subscribe(user => {

      if (user === null) {
        if (this.registrationForm.valid) {
          this.userService.createUser(this.registrationForm.value).subscribe(() => {

            this.router.navigate(['/login']);
          });
        }
      } else {
        this.userAlreadyExists = true;


      }
    });
  }

  public async particlesInit(engine: Engine): Promise<void> {
    const domArray: Container[] = engine.dom();
    if (domArray.length > 0) {
      domArray.splice(0, 1);
    }
    await loadSlim(engine);
  }

}
