import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterSourcePopupComponent } from './water-source-popup.component';

describe('WaterSourcePopupComponent', () => {
  let component: WaterSourcePopupComponent;
  let fixture: ComponentFixture<WaterSourcePopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WaterSourcePopupComponent]
    });
    fixture = TestBed.createComponent(WaterSourcePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
