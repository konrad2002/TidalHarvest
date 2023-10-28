import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldPopupComponent } from './field-popup.component';

describe('FieldPopupComponent', () => {
  let component: FieldPopupComponent;
  let fixture: ComponentFixture<FieldPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FieldPopupComponent]
    });
    fixture = TestBed.createComponent(FieldPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
