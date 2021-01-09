import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-category-filter-widget',
  templateUrl: './category-filter-widget.component.html',
  styleUrls: ['./category-filter-widget.component.css']
})
export class CategoryFilterWidgetComponent implements OnInit {

  @Input()
  categories: any;

  @Input()
  selectedCategory: string;

  @Output()
  typeClicked = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  clickedType(type: string){
    this.typeClicked.emit(type);
  }

}
