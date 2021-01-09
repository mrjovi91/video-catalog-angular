import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieTableComponent } from './movie-table/movie-table.component';



@NgModule({
  declarations: [MovieListComponent, MovieTableComponent],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule
  ]
})
export class MovieModule { }
