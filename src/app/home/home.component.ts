import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  index = 0;
  slides!: HTMLCollectionOf<HTMLElement>;
  total!: number;

  constructor() { }

  ngOnInit(): void {
    this.slides = document.getElementsByClassName('slide') as HTMLCollectionOf<HTMLElement>;
    this.total = this.slides.length;
    this.showNextSlide();
  }

  showNextSlide() {
    this.slides[this.index].style.display = 'none';

    this.index++;

    if (this.index === this.total) {
      this.index = 0;
    }

    this.slides[this.index].style.display = 'block';

    setTimeout(() => {
      this.showNextSlide();
    }, 2300);
  }
}
