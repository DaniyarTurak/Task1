import { Component } from '@angular/core';

@Component({
  selector: 'mc-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent {
  numbers: number[] = [1, 2, 3, 4];
}
