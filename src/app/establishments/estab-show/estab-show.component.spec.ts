import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstabShowComponent } from './estab-show.component';

describe('EstabShowComponent', () => {
  let component: EstabShowComponent;
  let fixture: ComponentFixture<EstabShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstabShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstabShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
