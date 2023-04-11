import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'mc-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  routes = [
    {
      path: '/',
      text: 'Homepage',
    },
    {
      path: 'three-column',
      text: 'Three Columns',
    },
    {
      path: 'two-column-1',
      text: 'Two Column #1',
    },
    {
      path: 'two-column-2',
      text: 'Two Column #2',
    },
    {
      path: 'about',
      text: 'About',
    },
  ];
  currentRoute: string = '';
  checkboxFlag: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.currentRoute = this.router.url;
  }

  handleClick(path: string): void {
    this.currentRoute = path;
  }

  closeSideBar() {
    this.checkboxFlag = !this.checkboxFlag;
  }
}
