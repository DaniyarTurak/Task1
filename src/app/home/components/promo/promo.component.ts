import { Component } from '@angular/core';

@Component({
  selector: 'mc-promo',
  templateUrl: './promo.component.html',
  styleUrls: ['./promo.component.scss'],
})
export class PromoComponent {
  showMore: boolean = false;
  text: string =
    'We do something really useful, important, and unique. Learn all about it here Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique architecto deserunt consectetur molestias o!';

  setShowMore(): void {
    this.showMore = !this.showMore;
  }
}
