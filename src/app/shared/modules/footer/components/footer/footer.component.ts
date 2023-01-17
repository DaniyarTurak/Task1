import { Component } from '@angular/core';

@Component({
  selector: 'mc-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  showLinks: boolean = true;

  toggle(): void {
    this.showLinks = !this.showLinks;
    console.log(this.showLinks);
  }
}
