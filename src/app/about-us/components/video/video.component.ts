import { Component } from '@angular/core';

@Component({
  selector: 'mc-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss'],
})
export class VideoComponent {
  videoDisabled: boolean = true;

  toggleVideo() {
    this.videoDisabled = !this.videoDisabled;
  }
}
