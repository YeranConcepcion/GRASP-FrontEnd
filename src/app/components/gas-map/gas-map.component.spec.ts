import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GasMapComponent } from './gas-map.component';

describe('GasMapComponent', () => {
  let component: GasMapComponent;
  let fixture: ComponentFixture<GasMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GasMapComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GasMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
