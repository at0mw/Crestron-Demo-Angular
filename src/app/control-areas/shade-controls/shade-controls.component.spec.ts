import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShadeControlsComponent } from './shade-controls.component';

describe('ShadeControlsComponent', () => {
  let component: ShadeControlsComponent;
  let fixture: ComponentFixture<ShadeControlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShadeControlsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShadeControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
