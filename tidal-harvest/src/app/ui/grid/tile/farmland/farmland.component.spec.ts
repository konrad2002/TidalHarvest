import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmlandComponent } from './farmland.component';

describe('FarmlandComponent', () => {
  let component: FarmlandComponent;
  let fixture: ComponentFixture<FarmlandComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FarmlandComponent]
    });
    fixture = TestBed.createComponent(FarmlandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
