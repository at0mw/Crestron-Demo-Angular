import { Component } from '@angular/core';
import { MessageService } from '../../services/message.service'

@Component({
  selector: 'app-keypad-module',
  templateUrl: './keypad-module.component.html',
  styleUrls: ['./keypad-module.component.scss']
})
export class KeypadModuleComponent {
  constructor(private messageService: MessageService) {}

  buttons: string[] = [
    '1', '2', '3',
    '4', '5', '6',
    '7', '8', '9',
    '*', '0', '#'
  ];

  buttonPressed(buttonName: string): void {
    console.log("Keypad Button Pressed :: Destination : ", buttonName);
    //this.destinationService.setSelectedDestination(buttonName);
    // Temp - To see if signals are sent
    this.messageService.sendActionMessage("1");
  }
}
 