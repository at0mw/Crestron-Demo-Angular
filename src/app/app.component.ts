import { Component, OnInit } from '@angular/core';
import { WebXPanelService } from '../app/services/web.xpanel.service'; // Import your WebXPanel service

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Crestron-Demo-Angular';

  constructor(private webXPanelService: WebXPanelService) {} // Inject WebXPanelService

  ngOnInit() {
    // Initialize WebXPanel and handle onConnect event at the application level
    const configuration = {
      host: 'ip_address | hostname',
      ipId: '3|0x03',
      roomId: 'virtual_control_room_id',
    };

    this.webXPanelService.initializeWebXPanel(configuration);

    // Listen for the onConnect event
    this.webXPanelService.onConnect(() => {
      console.log('WebXPanel is connected!');
    });
  }
}