import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  sliderData = [
    { labelKey: 'Bedroom', initialValue: 20 },
    { labelKey: 'Slider 2', initialValue: 75 }
  ];
}
