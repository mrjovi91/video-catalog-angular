import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { ActivatedRoute, Router } from '@angular/router';
import ISearchResult from '../ISearchResults';
import IMovieCategory from '../IMovieCategory';




@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
  providers: [
    {
      provide: MovieService,
      useClass: MovieService
    }
  ]
})
export class MovieListComponent implements OnInit {
  resultsPerPage: number = 10;
  currentPage: number;
  totalResults: number;
  lastPage: number;

  search: string;
  selectedCategory: string;
  movieCategories: IMovieCategory[] = [
    {
      name: 'ANY',
      cssStyle: 'btn btn-category-any'
    },
    {
      name: 'movie',
      cssStyle: 'btn btn-category-movie'
    },
    {
      name: 'series',
      cssStyle: 'btn btn-category-series'
    },
    {
      name: 'episode',
      cssStyle: 'btn btn-category-episode'
    }
  ];
  searchResults: ISearchResult;
  isLoading: boolean ;
  isError: string | null = null;


  constructor( private ms : MovieService, private ar : ActivatedRoute, private router: Router ) { }
  //movies/
  ngOnInit(): void {
    this.ar.url.subscribe(url =>{
      this.initCatalog();
  });
    
    // this.test = {
    //   search: this.ar.snapshot.paramMap.get('search'),
    //   page: this.ar.snapshot.paramMap.get('page'),
    //   type: this.ar.snapshot.paramMap.get('type')
    // }

    // setTimeout(() => {
    //   this.router.navigate(['movies', 'american', 2, 'series']);
    //   this.initCatalog();
    // }, 5000);
  }

  initCatalog(): void{
    this.isLoading = true;
    this.search = null;
    this.currentPage = null;
    this.totalResults = null;
    this.search = null;
    this.selectedCategory = null;
    this.isError = null;

    if (this.ar.snapshot.paramMap.get('search'))
      this.search = this.ar.snapshot.paramMap.get('search');
    else
      this.search = 'american';
    
    if(this.ar.snapshot.paramMap.get('page'))
      this.currentPage = parseInt(this.ar.snapshot.paramMap.get('page'));
    else
      this.currentPage = 1;

    if(this.ar.snapshot.paramMap.get('type'))
      this.selectedCategory = this.ar.snapshot.paramMap.get('type');
    else 
      this.selectedCategory = 'ANY';
    

    if (this.selectedCategory === 'ANY'){
      this.ms.getMovies(this.search, this.currentPage).subscribe(
        data => {
          this.isLoading = false;
          if(data.Response === "True"){
            this.searchResults = data;
            this.totalResults = parseInt(data.totalResults);
            this.lastPage = Math.ceil(this.totalResults / this.resultsPerPage);
            if (this.currentPage > this.lastPage)
              this.showError('Invalid page.')
            else
              this.isLoading = false;
          }
          else
            this.showError('No results found.');
          
        },
        error => {
          this.showError('Error')
        }
      );
    }
    else{
      this.ms.getMovies(this.search, this.currentPage, this.selectedCategory).subscribe(
        data => {
          this.isLoading = false;
          if(data.Response === "True"){
            this.searchResults = data;
            this.totalResults = parseInt(data.totalResults);
            this.lastPage = Math.ceil(this.totalResults / this.resultsPerPage);
            if (this.currentPage > this.lastPage)
              this.showError('Invalid page.')
            else
              this.isLoading = false;
          }
          else
            this.showError('Error');
          
        },
        error => {
          this.showError('Error')
        }
      );
    }

    
  }

  showError(msg: string){
    this.isLoading = false;
    this.isError = msg;
  }

  goToPage(page: number){
    let search: string;
    if (this.ar.snapshot.paramMap.get('search'))
      search = this.ar.snapshot.paramMap.get('search');
    else
      search = 'american';

    if(this.ar.snapshot.paramMap.get('type')){
      const type: string = this.ar.snapshot.paramMap.get('type');
      this.router.navigate(['movies', search, page, type]);
    } 
    else
      this.router.navigate(['movies', search, page]);
  }

  changeCategoryType(type: string){
    let search: string;
    if (this.ar.snapshot.paramMap.get('search'))
      search = this.ar.snapshot.paramMap.get('search');
    else
      search = 'american';

    if (type === 'ANY')
      this.router.navigate(['movies', search, 1]);
    else
      this.router.navigate(['movies', search, 1, type]);

  }

  newSearch(query: string){
    this.router.navigate(['movies', query, 1]);
    
  }


  

}
