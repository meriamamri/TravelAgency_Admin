import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTypepromoComponent } from './add-typepromo.component';

describe('AddTypepromoComponent', () => {
  let component: AddTypepromoComponent;
  let fixture: ComponentFixture<AddTypepromoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTypepromoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTypepromoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
