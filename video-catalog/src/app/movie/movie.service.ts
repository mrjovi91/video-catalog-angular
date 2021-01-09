import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { throwError } from "rxjs";
import { retry, catchError } from 'rxjs/operators';
import IMovie from './IMovie';
import ISearchResult from './ISearchResults';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor( private http: HttpClient ) { }

  handleError(error: ErrorEvent){
    return throwError( new Error('Something went wrong!') )
  }

  getMovies(searchQuery: string, page: number, type: string='ANY'){
    let getUrl: string;
    if ( type === 'ANY')
      getUrl = `${environment.apiUrl}?apikey=${environment.apiKey}&s=${searchQuery}&page=${page}`;
    else
      getUrl = `${environment.apiUrl}?apikey=${environment.apiKey}&s=${searchQuery}&page=${page}&type=${type}`;
    // getUrl = 'http://127.0.0.1'
    return this.http.get<ISearchResult>(
      getUrl
    ).pipe(
      retry(3),
      catchError( this.handleError )
    )
  }
  

}

