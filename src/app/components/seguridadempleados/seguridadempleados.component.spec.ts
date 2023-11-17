import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeguridadempleadosComponent } from './seguridadempleados.component';

describe('SeguridadempleadosComponent', () => {
  let component: SeguridadempleadosComponent;
  let fixture: ComponentFixture<SeguridadempleadosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeguridadempleadosComponent]
    });
    fixture = TestBed.createComponent(SeguridadempleadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
