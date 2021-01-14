import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstabConditionComponent } from './estab-condition.component';

describe('EstabConditionComponent', () => {
  let component: EstabConditionComponent;
  let fixture: ComponentFixture<EstabConditionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstabConditionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstabConditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
