import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstabContactComponent } from './estab-contact.component';

describe('EstabContactComponent', () => {
  let component: EstabContactComponent;
  let fixture: ComponentFixture<EstabContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstabContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstabContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
