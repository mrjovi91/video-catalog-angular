import { Component, Input, OnInit } from '@angular/core';
import IMovie from '../IMovie'
import ISearchResult from '../ISearchResults';

@Component({
  selector: 'app-movie-table',
  templateUrl: './movie-table.component.html',
  styleUrls: ['./movie-table.component.css']
})
export class MovieTableComponent implements OnInit {

  @Input()
  loading: boolean;

  @Input()
  searchResults: ISearchResult;

  @Input()
  isError: string;

  constructor() { }

  ngOnInit(): void {

  }

}
