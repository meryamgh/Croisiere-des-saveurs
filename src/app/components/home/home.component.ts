import {Component, OnInit} from '@angular/core';
import {User} from "../../models/user.model";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public slides: string[][] = [
    ['image1.png', 'image2.png', 'image3.png'],
    ['image4.png', 'image5.png', 'image6.png']
  ]
  public index: number = 0;
  public currentUser !: User;
  public link: string = "/registration";

  public ngOnInit(): void {
    const storedUser:string | null = sessionStorage.getItem("userLogged");
    if (storedUser) {
      this.currentUser = JSON.parse(storedUser) as User;
      this.link = "/favoris";
    }
    this.showNextSlide();
  }

  public showNextSlide(): void {
    this.index = (this.index + 1) % 2;
    setTimeout(() => this.showNextSlide(), 2300);
  }

}
