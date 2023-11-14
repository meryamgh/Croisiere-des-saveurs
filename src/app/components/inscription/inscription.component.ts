import {Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../services/user/user.service";
import {Router} from "@angular/router";
import {Container, Engine} from "tsparticles-engine";
import {loadSlim} from "tsparticles-slim";
import {particlesOptionsAnimation} from '../login/particles.config';

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
  public userAlreadyExists!: boolean;
  public particlesOptions = particlesOptionsAnimation;

  public constructor(private formBuilder: FormBuilder, private router: Router,
                     private userService: UserService) {
  }

  public onSubmit(): void {

    this.userService.getUser(this.inscriptionForm.get('email')?.value).subscribe(user => {

      if (user === null) {
        if (this.inscriptionForm.valid) {
          this.userService.createUser(this.inscriptionForm.value).subscribe(() => {

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
