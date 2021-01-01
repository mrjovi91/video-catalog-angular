import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MovieModule } from './movie/movie.module'
import { AppRoutingModule } from './app-routing.module';
import { MovieRoutingModule } from './movie/movie-routing.module'

import { AppComponent } from './app/app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MovieRoutingModule,
    MovieModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
