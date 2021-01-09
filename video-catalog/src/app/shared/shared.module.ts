import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationWidgetComponent } from './pagination-widget/pagination-widget.component';
import { SearchWidgetComponent } from './search-widget/search-widget.component';
import { CategoryFilterWidgetComponent } from './category-filter-widget/category-filter-widget.component';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PaginationWidgetComponent, 
    SearchWidgetComponent, 
    CategoryFilterWidgetComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    PaginationWidgetComponent, 
    SearchWidgetComponent, 
    CategoryFilterWidgetComponent]
})
export class SharedModule { }
