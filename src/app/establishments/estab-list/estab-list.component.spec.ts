import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstabListComponent } from './estab-list.component';

describe('EstabListComponent', () => {
  let component: EstabListComponent;
  let fixture: ComponentFixture<EstabListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstabListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstabListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
