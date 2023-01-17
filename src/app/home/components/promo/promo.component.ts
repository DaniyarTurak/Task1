import { Component } from '@angular/core';

@Component({
  selector: 'mc-promo',
  templateUrl: './promo.component.html',
  styleUrls: ['./promo.component.scss'],
})
export class PromoComponent {
  showMore: boolean = false;
  text: string =
    'We do something really useful, important, and unique. Learn all about it here';

  setShowMore(): void {
    this.showMore = !this.showMore;
  }
}
