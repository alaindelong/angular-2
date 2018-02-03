import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Grafica2Component } from './grafica2.component';

describe('Grafica2Component', () => {
  let component: Grafica2Component;
  let fixture: ComponentFixture<Grafica2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Grafica2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Grafica2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
