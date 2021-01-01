import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationWidgetComponent } from './pagination-widget/pagination-widget.component';
import { SearchWidgetComponent } from './search-widget/search-widget.component';
import { CategoryFilterWidgetComponent } from './category-filter-widget/category-filter-widget.component';



@NgModule({
  declarations: [
    PaginationWidgetComponent, 
    SearchWidgetComponent, 
    CategoryFilterWidgetComponent],
  imports: [
    CommonModule
  ],
  exports: [
    PaginationWidgetComponent, 
    SearchWidgetComponent, 
    CategoryFilterWidgetComponent]
})
export class SharedModule { }
