import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-widget',
  templateUrl: './search-widget.component.html',
  styleUrls: ['./search-widget.component.css']
})
export class SearchWidgetComponent implements OnInit {
  @Input()
  query: string;

  @Output()
  newSearch = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  search(query: string){
    this.newSearch.emit(query);
  }


}
