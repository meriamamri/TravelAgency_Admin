import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateChaineComponent } from './update-chaine.component';

describe('UpdateChaineComponent', () => {
  let component: UpdateChaineComponent;
  let fixture: ComponentFixture<UpdateChaineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateChaineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateChaineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
