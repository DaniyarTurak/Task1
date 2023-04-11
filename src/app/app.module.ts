import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { FooterModule } from './shared/modules/footer/footer.module';
import { HeaderModule } from './shared/modules/header/header.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AboutUsModule } from './about-us/about-us.module';
import { StoreModule } from '@ngrx/store';
import { CarouselModule } from './UI/carousel.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    HeaderModule,
    FooterModule,
    CarouselModule,
    FontAwesomeModule,
    AboutUsModule,
    StoreModule.forRoot({}, {}),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
