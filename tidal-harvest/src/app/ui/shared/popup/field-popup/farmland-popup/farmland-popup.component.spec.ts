import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmlandPopupComponent } from './farmland-popup.component';

describe('FarmlandPopupComponent', () => {
  let component: FarmlandPopupComponent;
  let fixture: ComponentFixture<FarmlandPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FarmlandPopupComponent]
    });
    fixture = TestBed.createComponent(FarmlandPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
