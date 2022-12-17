import { Component } from '@angular/core';

@Component({
  selector: 'mc-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  checkboxFlag: boolean = false;

  closeSideBar() {
    this.checkboxFlag = false;
  }
}
