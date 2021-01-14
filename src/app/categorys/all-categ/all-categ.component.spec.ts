import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCategComponent } from './all-categ.component';

describe('AllCategComponent', () => {
  let component: AllCategComponent;
  let fixture: ComponentFixture<AllCategComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllCategComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllCategComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
