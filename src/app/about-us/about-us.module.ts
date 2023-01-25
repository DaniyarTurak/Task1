import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { VideoComponent } from './components/video/video.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  {
    path: 'about',
    component: AboutComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), FormsModule],
  declarations: [AboutComponent, VideoComponent],
})
export class AboutUsModule {}
