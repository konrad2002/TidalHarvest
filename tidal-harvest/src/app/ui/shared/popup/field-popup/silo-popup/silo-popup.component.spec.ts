import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiloPopupComponent } from './silo-popup.component';

describe('SiloPopupComponent', () => {
  let component: SiloPopupComponent;
  let fixture: ComponentFixture<SiloPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SiloPopupComponent]
    });
    fixture = TestBed.createComponent(SiloPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
