import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidersModuleComponent } from './sliders-module.component';

describe('SlidersModuleComponent', () => {
  let component: SlidersModuleComponent;
  let fixture: ComponentFixture<SlidersModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlidersModuleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlidersModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
