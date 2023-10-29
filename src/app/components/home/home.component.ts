import {Component, OnInit} from '@angular/core';


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
  constructor() {}
  public showNextSlide(): void {
    this.index = (this.index + 1) % 2;
    setTimeout(() => this.showNextSlide(), 2300);
  }
  public ngOnInit(): void {
    this.showNextSlide();
  }
}
