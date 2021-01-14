import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminagencyComponent } from './adminagency.component';

describe('AdminagencyComponent', () => {
  let component: AdminagencyComponent;
  let fixture: ComponentFixture<AdminagencyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminagencyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminagencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
