import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetOneComponent } from './widget-one.component';

describe('WidgetOneComponent', () => {
  let component: WidgetOneComponent;
  let fixture: ComponentFixture<WidgetOneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [WidgetOneComponent]
    });
    fixture = TestBed.createComponent(WidgetOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
