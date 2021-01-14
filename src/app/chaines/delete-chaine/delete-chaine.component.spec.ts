import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteChaineComponent } from './delete-chaine.component';

describe('DeleteChaineComponent', () => {
  let component: DeleteChaineComponent;
  let fixture: ComponentFixture<DeleteChaineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteChaineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteChaineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
