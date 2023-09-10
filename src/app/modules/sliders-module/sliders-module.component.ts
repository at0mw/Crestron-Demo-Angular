import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sliders-module',
  templateUrl: './sliders-module.component.html',
  styleUrls: ['./sliders-module.component.scss']
})
export class SlidersModuleComponent {
  @Input() data: any[] = [];

}
