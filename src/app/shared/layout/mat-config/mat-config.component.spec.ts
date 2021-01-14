import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatConfigComponent } from './mat-config.component';

describe('MatConfigComponent', () => {
  let component: MatConfigComponent;
  let fixture: ComponentFixture<MatConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
