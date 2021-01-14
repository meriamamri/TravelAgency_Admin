import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllChainesComponent } from './all-chaines.component';

describe('AllChainesComponent', () => {
  let component: AllChainesComponent;
  let fixture: ComponentFixture<AllChainesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllChainesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllChainesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
