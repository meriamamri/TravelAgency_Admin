import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstabCreateComponent } from './estab-create.component';

describe('EstabCreateComponent', () => {
  let component: EstabCreateComponent;
  let fixture: ComponentFixture<EstabCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstabCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstabCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
