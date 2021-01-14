import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCategComponent } from './add-categ.component';

describe('AddCategComponent', () => {
  let component: AddCategComponent;
  let fixture: ComponentFixture<AddCategComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCategComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCategComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
