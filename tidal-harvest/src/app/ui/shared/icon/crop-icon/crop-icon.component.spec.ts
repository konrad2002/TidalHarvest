import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CropIconComponent } from './crop-icon.component';

describe('CropIconComponent', () => {
  let component: CropIconComponent;
  let fixture: ComponentFixture<CropIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CropIconComponent]
    });
    fixture = TestBed.createComponent(CropIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
