import { Component } from '@angular/core';

@Component({
  selector: 'app-shade-controls',
  templateUrl: './shade-controls.component.html',
  styleUrls: ['./shade-controls.component.scss']
})
export class ShadeControlsComponent {
  sliderData = [
    { labelKey: 'Entrance Hall', initialValue: 100 },
    { labelKey: 'Living Room', initialValue: 60 },
    { labelKey: 'Kitchen', initialValue: 100 },
    { labelKey: 'Dining Room', initialValue: 80 },
    { labelKey: 'Hallway', initialValue: 100 },
    { labelKey: 'Master Bedroom', initialValue: 20 }
  ];
}
