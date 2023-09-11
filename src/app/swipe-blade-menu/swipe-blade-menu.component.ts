import { Component, HostListener } from '@angular/core';
import { DestinationService } from '../services/destination.service';
import { fadeOutAnimation, positionAnimation } from '../services/animations';
@Component({
  selector: 'app-swipe-blade-menu',
  templateUrl: './swipe-blade-menu.component.html',
  styleUrls: ['./swipe-blade-menu.component.scss'],
  animations: [fadeOutAnimation, positionAnimation],
})
export class SwipeBladeMenuComponent {
  currentPosition: string = 'home'

  constructor(private destinationService: DestinationService) {}

  ngOnInit(): void {
    this.destinationService.selectedDestination$.subscribe((destination) => {
      this.updateDirection(destination);
    });
  }

  updateDirection(newDestination: string) {
    console.log('New Postion: ', newDestination);
    if (newDestination) {
      this.currentPosition = newDestination;
    }
  }
}
