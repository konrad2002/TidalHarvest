import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterComponent } from './water.component';

describe('WaterComponent', () => {
  let component: WaterComponent;
  let fixture: ComponentFixture<WaterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WaterComponent]
    });
    fixture = TestBed.createComponent(WaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
