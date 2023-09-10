import { Component } from '@angular/core';

@Component({
  selector: 'app-keypad-module',
  templateUrl: './keypad-module.component.html',
  styleUrls: ['./keypad-module.component.scss']
})
export class KeypadModuleComponent {
  buttons: string[] = [
    '1', '2', '3',
    '4', '5', '6',
    '7', '8', '9',
    '*', '0', '#'
  ];

  buttonPressed(buttonName: string): void {
    console.log("Keypad Button Pressed :: Destination : ", buttonName);
    //this.destinationService.setSelectedDestination(buttonName);
  }
}
 