import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsApiDemandsComponent } from './clients-api-demands.component';

describe('ClientsApiDemandsComponent', () => {
  let component: ClientsApiDemandsComponent;
  let fixture: ComponentFixture<ClientsApiDemandsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientsApiDemandsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientsApiDemandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
