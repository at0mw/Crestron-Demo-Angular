import { Component } from '@angular/core';

@Component({
  selector: 'app-lighting-controls',
  templateUrl: './lighting-controls.component.html',
  styleUrls: ['./lighting-controls.component.scss']
})
export class LightingControlsComponent {
  sliderData = [
    { labelKey: 'Entrance Hall', initialValue: 100 },
    { labelKey: 'Living Room', initialValue: 60 },
    { labelKey: 'Kitchen', initialValue: 100 },
    { labelKey: 'Dining Room', initialValue: 80 },
    { labelKey: 'Hallway', initialValue: 100 },
    { labelKey: 'Master Bedroom', initialValue: 20 },
    // { labelKey: 'Johns Bedroom', initialValue: 20 },
    // { labelKey: 'Guest Bedroom', initialValue: 20 }
  ];
}
