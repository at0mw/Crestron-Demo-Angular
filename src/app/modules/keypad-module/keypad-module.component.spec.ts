import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeypadModuleComponent } from './keypad-module.component';

describe('KeypadModuleComponent', () => {
  let component: KeypadModuleComponent;
  let fixture: ComponentFixture<KeypadModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeypadModuleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeypadModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
