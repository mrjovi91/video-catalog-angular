import { Component, Input, OnInit, Output, EventEmitter, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-pagination-widget',
  templateUrl: './pagination-widget.component.html',
  styleUrls: ['./pagination-widget.component.css']
})
export class PaginationWidgetComponent implements OnInit {
  @Input()
  resultsPerPage: number | null;

  @Input()
  currentPage: number | null;

  @Input()
  totalResults: number | null;

  @Input()
  url: string;

  @Input()
  isLoading: boolean;

  @Input()
  isError: boolean;

  @Output()
  pageClick = new EventEmitter<number>();

  shownPagination: number[] | null;
  firstDisplayedResult: number | null;
  lastDisplayedResult: number | null;
  totalPages: number;

  constructor() { }

  ngOnInit(): void {
    this.refreshPagination();
  }

  ngOnChanges(changes: SimpleChanges) {      
    this.refreshPagination();
  }

  clickedPage(pageNumber: number){
    this.pageClick.emit(pageNumber);
  }

  refreshPagination(){
    this.totalPages = Math.ceil(this.totalResults / this.resultsPerPage);
    // Set pagination
    if (this.currentPage < 6){
      if(this.totalPages < 5){
        this.shownPagination = [];
        for(let i:number=1; i<=this.totalPages; i++){
          this.shownPagination.push(i);
        }
      }
      else{
        this.shownPagination = [1,2,3,4,5];
      }
    }
    else{
      this.shownPagination = [];
      for(let i: number=this.currentPage - 4; i<= this.currentPage; i++){
        this.shownPagination.push(i);
      }
    }

    // Set result index
    this.firstDisplayedResult = (this.currentPage * this.resultsPerPage) - (this.resultsPerPage - 1);
    if (this.currentPage == this.totalPages)
      this.lastDisplayedResult = this.totalResults
    else
      this.lastDisplayedResult = this.currentPage * this.resultsPerPage

  }



}
