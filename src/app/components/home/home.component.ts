import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {User} from "../../models/user.model";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  public slides = [
    ['image2.png', 'image1.png', 'image3.png'],
    ['image5.png', 'image4.png', 'image6.png']
  ];
  public index = 0;
  public currentUser !:User;
  public link = "/inscription";
  elseBlock : any;

  public showNextSlide(): void {
    this.index = (this.index + 1) % 2;
    setTimeout(() => this.showNextSlide(), 2300);
  }
  public ngOnInit(): void {
    const storedUser = sessionStorage.getItem("userLogged");
    if(storedUser) {
      this.currentUser = JSON.parse(storedUser) as User;
      this.link = "/favoris";
    }
    this.showNextSlide();
  }
}
