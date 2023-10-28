import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterChannelPopupComponent } from './water-channel-popup.component';

describe('WaterChannelPopupComponent', () => {
  let component: WaterChannelPopupComponent;
  let fixture: ComponentFixture<WaterChannelPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WaterChannelPopupComponent]
    });
    fixture = TestBed.createComponent(WaterChannelPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
