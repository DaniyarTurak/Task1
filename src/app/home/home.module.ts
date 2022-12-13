import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PromoComponent } from './components/promo/promo.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { RangeComponent } from './components/range/range.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
];
// forChild because is is child module
@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [HomeComponent, PromoComponent, WelcomeComponent, RangeComponent],
})
export class HomeModule {}
