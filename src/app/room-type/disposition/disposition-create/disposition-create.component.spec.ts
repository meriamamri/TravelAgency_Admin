import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DispositionCreateComponent } from './disposition-create.component';

describe('DispositionCreateComponent', () => {
  let component: DispositionCreateComponent;
  let fixture: ComponentFixture<DispositionCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DispositionCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DispositionCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
