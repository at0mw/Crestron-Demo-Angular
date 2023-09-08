import { Component } from '@angular/core';
import { DestinationService } from '../destination.service';

@Component({
  selector: 'app-swipe-blade-menu',
  templateUrl: './swipe-blade-menu.component.html',
  styleUrls: ['./swipe-blade-menu.component.scss']
})
export class SwipeBladeMenuComponent {
  selectedDestination: string = '';

  constructor(private destinationService: DestinationService) {}

  ngOnInit(): void {
    this.destinationService.selectedDestination$.subscribe((destination) => {
      this.selectedDestination = destination;
    });
  }
}
