import { Component, HostListener } from '@angular/core';
import { DestinationService } from '../destination.service';
import { fadeOutAnimation, positionAnimation } from '../animations';
@Component({
  selector: 'app-swipe-blade-menu',
  templateUrl: './swipe-blade-menu.component.html',
  styleUrls: ['./swipe-blade-menu.component.scss'],
  animations: [ fadeOutAnimation, positionAnimation ],
})
export class SwipeBladeMenuComponent {
  currentPosition: string = 'home';
  private lastTouchX = 0;
  private swipeThreshold = 0;
  private swipeThresholdPercent = 20;
  private pageNames: string[] = ['home', 'lighting', 'shades', 'settings' ];

  constructor(private destinationService: DestinationService) {
    const screenWidth = window.innerWidth;
    this.swipeThreshold = (screenWidth * this.swipeThresholdPercent) / 100;
  }

  ngOnInit(): void {
    this.destinationService.selectedDestination$.subscribe((destination) => {
      //this.selectedDestination = destination;
      this.updateDirection(destination);
    });
  }

  updateDirection(newDestination: string) {
    console.log("New Postion: ", newDestination);
    if(newDestination){
      this.currentPosition = newDestination;
    }
  }

  animationConditional(destination: string): string {console.log('animationConditional called with destination:', destination);
    return 'translateLeft';
  }

  // @HostListener('window:touchstart', ['$event'])
  // onTouchStart(event: TouchEvent): void {
  //   this.lastTouchX = event.touches[0].clientX;
  //   //console.log("Position: ", this.lastTouchX);
  // }

  // @HostListener('window:touchmove', ['$event'])
  // onTouchMove(event: TouchEvent): void {
  //   const currentTouchX = event.touches[0].clientX;
  //   const deltaX = currentTouchX - this.lastTouchX;
  //   //console.log(currentTouchX);
  //   if (deltaX < -this.swipeThreshold) { 
  //     //console.log("Position: Last: ", this.lastTouchX, " Current: ", currentTouchX);     
  //     this.navigateRight(currentTouchX);
  //   } else if (deltaX > this.swipeThreshold) {
  //     //console.log("Position: Last: ", this.lastTouchX, " Current: ", currentTouchX);     
  //     this.navigateLeft(currentTouchX);
  //   }
  // }

  // // TODO - Might need to offset by move
  // private navigateRight(currentTouchX : any) {
  //   const index = this.pageNames.indexOf(this.currentPosition);
  //   //console.log("Swiping Right......", index);
  //   this.lastTouchX = currentTouchX;

  //   // Increment the index by 1 if it's less than the maximum index
  //   if (index < this.pageNames.length - 1) {
  //     this.currentPosition = this.pageNames[index + 1];
  //   }
  //   this.updateDirection(this.currentPosition);
  // }

  // private navigateLeft(currentTouchX : any) {
  //   const index = this.pageNames.indexOf(this.currentPosition);
  //   //console.log("Swiping Left......", index);
  //   this.lastTouchX = currentTouchX;

  //   if (index > 0) {
  //     this.currentPosition = this.pageNames[index - 1];
  //   }
  //   this.updateDirection(this.currentPosition);
  // }
}
