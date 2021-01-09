import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieListComponent } from './movie-list/movie-list.component';


const routes: Routes = [
  { path: 'movies', component: MovieListComponent},
  { path: 'movies/:search/:page', component: MovieListComponent},
  { path: 'movies/:search/:page/:type', component: MovieListComponent}
  // { 
  //   path: 'workshops/:id', 
  //   component: WorkshopDetailsComponent,
  //   children: [
  //     {path: '', component: SessionsListComponent},
  //     {path: 'add-session', component: AddSessionComponent}
  //   ]
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieRoutingModule { }
