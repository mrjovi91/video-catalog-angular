import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryFilterWidgetComponent } from './category-filter-widget.component';

describe('CategoryFilterWidgetComponent', () => {
  let component: CategoryFilterWidgetComponent;
  let fixture: ComponentFixture<CategoryFilterWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryFilterWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryFilterWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
