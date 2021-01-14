import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTypepromoComponent } from './all-typepromo.component';

describe('AllTypepromoComponent', () => {
  let component: AllTypepromoComponent;
  let fixture: ComponentFixture<AllTypepromoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllTypepromoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllTypepromoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
