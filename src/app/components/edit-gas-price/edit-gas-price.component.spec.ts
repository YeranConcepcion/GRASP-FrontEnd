import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditGasPriceComponent } from './edit-gas-price.component';

describe('EditGasPriceComponent', () => {
  let component: EditGasPriceComponent;
  let fixture: ComponentFixture<EditGasPriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditGasPriceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditGasPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
