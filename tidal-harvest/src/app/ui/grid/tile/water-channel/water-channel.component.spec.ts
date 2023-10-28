import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterChannelComponent } from './water-channel.component';

describe('WaterChannelComponent', () => {
  let component: WaterChannelComponent;
  let fixture: ComponentFixture<WaterChannelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WaterChannelComponent]
    });
    fixture = TestBed.createComponent(WaterChannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
