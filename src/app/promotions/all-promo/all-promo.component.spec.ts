import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPromoComponent } from './all-promo.component';

describe('AllPromoComponent', () => {
  let component: AllPromoComponent;
  let fixture: ComponentFixture<AllPromoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllPromoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllPromoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
