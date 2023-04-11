import {
  Component,
  AfterViewInit,
  ViewChild,
  ElementRef,
  Renderer2,
} from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements AfterViewInit {
  @ViewChild('items') items: ElementRef;
  @ViewChild('prev') prev: ElementRef;
  @ViewChild('next') next: ElementRef;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    // Set the initial position of the carousel
    this.renderer.setStyle(
      this.items.nativeElement,
      'transform',
      'translateX(0)'
    );

    // Add event listeners to the navigation buttons
    this.renderer.listen(this.prev.nativeElement, 'click', () => this.move(-1));
    this.renderer.listen(this.next.nativeElement, 'click', () => this.move(1));
  }

  move(direction: number) {
    // Calculate the new position of the carousel
    const step = this.items.nativeElement.offsetWidth;
    const current =
      this.items.nativeElement.style.transform.match(/-?\d+/g)?.[0] || '0';
    const next = +current + step * direction;

    // Move the carousel to the new position
    this.renderer.setStyle(
      this.items.nativeElement,
      'transform',
      `translateX(${next}px)`
    );
  }
}
