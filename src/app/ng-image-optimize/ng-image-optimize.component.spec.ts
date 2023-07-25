import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgImageOptimizeComponent } from './ng-image-optimize.component';

describe('NgImageOptimizeComponent', () => {
  let component: NgImageOptimizeComponent;
  let fixture: ComponentFixture<NgImageOptimizeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NgImageOptimizeComponent]
    });
    fixture = TestBed.createComponent(NgImageOptimizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
