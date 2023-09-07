import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwipeBladeMenuComponent } from './swipe-blade-menu.component';

describe('SwipeBladeMenuComponent', () => {
  let component: SwipeBladeMenuComponent;
  let fixture: ComponentFixture<SwipeBladeMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwipeBladeMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwipeBladeMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
