import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstabUpdateComponent } from './estab-update.component';

describe('EstabUpdateComponent', () => {
  let component: EstabUpdateComponent;
  let fixture: ComponentFixture<EstabUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstabUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstabUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
