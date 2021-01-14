import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAgencyDemandsComponent } from './admin-agency-demands.component';

describe('AdminAgencyDemandsComponent', () => {
  let component: AdminAgencyDemandsComponent;
  let fixture: ComponentFixture<AdminAgencyDemandsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAgencyDemandsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAgencyDemandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
