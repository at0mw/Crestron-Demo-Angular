import { Component, HostListener } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { DestinationService } from '../destination.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss'],
  animations: [
    trigger('slideDown', [
      state('show', style({ transform: 'translateY(-20px)' })),
      state('hide', style({ transform: 'translateY(150px)' })),
      transition('show <=> hide', animate('0.3s ease')),
    ]),
  ],
})
export class NavigationBarComponent {
  navBarState: 'show' | 'hide' = 'hide';  
  private lastTouchY = 0;
  private swipeUpThreshold = 50;
  private isNavBarVisible = false;
  private hideNavBarTimer: any;

  constructor(private destinationService: DestinationService) {}

  @HostListener('touchstart', ['$event'])
  onTouchStart(event: TouchEvent): void {
    this.lastTouchY = event.touches[0].clientY;
    this.isNavBarVisible = true;
  }

  @HostListener('touchmove', ['$event'])
  onTouchMove(event: TouchEvent): void {
    const currentTouchY = event.touches[0].clientY;
    const deltaY = currentTouchY - this.lastTouchY;

    // Check if the swipe is upwards and exceeds the threshold
    if (deltaY < -this.swipeUpThreshold) {
      this.navBarState = 'show';
    } else {
      this.navBarState = 'hide';
    }
  }

  @HostListener('touchend', ['$event'])
  onTouchEnd(event: TouchEvent): void {
    if (this.navBarState === 'show') {
      this.resetTimer();
    }
  }

  resetTimer(): void {
    clearTimeout(this.hideNavBarTimer);
    this.hideNavBarTimer = setTimeout(() => {
      this.navBarState = 'hide';
    }, 5000);
  }

  navigationButtonPressed(buttonName: string): void {
    console.log("Navigation Button Pressed :: Destination : ", buttonName);
    this.destinationService.setSelectedDestination(buttonName);
  }
}
