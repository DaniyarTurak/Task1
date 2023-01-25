import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PromoComponent } from './components/promo/promo.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { RangeComponent } from './components/range/range.component';
import { ThreeColumnComponent } from './components/three-column/three-column.component';
import { TwoColumn01Component } from './components/two-column01/two-column01.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'three-column',
    component: ThreeColumnComponent,
  },
];
// forChild because is is child module
@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [
    HomeComponent,
    PromoComponent,
    WelcomeComponent,
    RangeComponent,
    ThreeColumnComponent,
    TwoColumn01Component,
  ],
})
export class HomeModule {}
