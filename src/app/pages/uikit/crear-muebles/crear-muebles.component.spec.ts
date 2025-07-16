import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearMueblesComponent } from './crear-muebles.component';

describe('CrearMueblesComponent', () => {
  let component: CrearMueblesComponent;
  let fixture: ComponentFixture<CrearMueblesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearMueblesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearMueblesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
