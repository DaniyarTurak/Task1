import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mc-range',
  templateUrl: './range.component.html',
  styleUrls: ['./range.component.scss'],
})
export class RangeComponent implements OnInit {
  items: NodeListOf<Element>;
  currentItem = 0;

  constructor() {}

  ngOnInit(): void {
    this.items = document.querySelectorAll('.carousel-item');
    this.items[this.currentItem].classList.add('active');

    document.querySelector('.prev').addEventListener('click', () => {
      this.currentItem =
        this.currentItem === 0 ? this.items.length - 1 : this.currentItem - 1;
      this.updateCarousel();
    });

    document.querySelector('.next').addEventListener('click', () => {
      this.currentItem =
        this.currentItem === this.items.length - 1 ? 0 : this.currentItem + 1;
      this.updateCarousel();
    });
  }

  updateCarousel() {
    this.items.forEach((item) => item.classList.remove('active'));
    this.items[this.currentItem].classList.add('active');
  }
}
