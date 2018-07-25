import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndiaTourComponent } from './india-tour.component';

describe('IndiaTourComponent', () => {
  let component: IndiaTourComponent;
  let fixture: ComponentFixture<IndiaTourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndiaTourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndiaTourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
