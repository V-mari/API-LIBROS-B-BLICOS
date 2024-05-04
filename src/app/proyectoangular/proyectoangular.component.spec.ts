import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectoangularComponent } from './proyectoangular.component';

describe('ProyectoangularComponent', () => {
  let component: ProyectoangularComponent;
  let fixture: ComponentFixture<ProyectoangularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProyectoangularComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProyectoangularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
