import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayMapComponent } from './map.component';

describe('MapComponent', () => {
  let component: DisplayMapComponent;
  let fixture: ComponentFixture<DisplayMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayMapComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
