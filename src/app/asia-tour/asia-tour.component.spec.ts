import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsiaTourComponent } from './asia-tour.component';

describe('AsiaTourComponent', () => {
  let component: AsiaTourComponent;
  let fixture: ComponentFixture<AsiaTourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsiaTourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsiaTourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
