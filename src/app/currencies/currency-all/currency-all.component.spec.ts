import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyAllComponent } from './currency-all.component';

describe('CurrencyAllComponent', () => {
  let component: CurrencyAllComponent;
  let fixture: ComponentFixture<CurrencyAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrencyAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
