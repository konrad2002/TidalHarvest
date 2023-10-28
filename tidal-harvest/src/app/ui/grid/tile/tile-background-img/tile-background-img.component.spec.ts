import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TileBackgroundImgComponent } from './tile-background-img.component';

describe('TileBackgroundImgComponent', () => {
  let component: TileBackgroundImgComponent;
  let fixture: ComponentFixture<TileBackgroundImgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TileBackgroundImgComponent]
    });
    fixture = TestBed.createComponent(TileBackgroundImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
