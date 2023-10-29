import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigPopupComponent } from './big-popup.component';

describe('BigPopupComponent', () => {
  let component: BigPopupComponent;
  let fixture: ComponentFixture<BigPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BigPopupComponent]
    });
    fixture = TestBed.createComponent(BigPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
