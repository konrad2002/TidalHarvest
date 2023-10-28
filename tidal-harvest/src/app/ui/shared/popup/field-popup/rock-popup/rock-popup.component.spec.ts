import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RockPopupComponent } from './rock-popup.component';

describe('RockPopupComponent', () => {
  let component: RockPopupComponent;
  let fixture: ComponentFixture<RockPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RockPopupComponent]
    });
    fixture = TestBed.createComponent(RockPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
