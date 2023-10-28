import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerPopupComponent } from './farmer-popup.component';

describe('FarmerPopupComponent', () => {
  let component: FarmerPopupComponent;
  let fixture: ComponentFixture<FarmerPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FarmerPopupComponent]
    });
    fixture = TestBed.createComponent(FarmerPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
