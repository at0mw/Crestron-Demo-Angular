import { Injectable } from '@angular/core';
import WebXPanel, { WebXPanelConfigParams } from "@crestron/ch5-webxpanel";

@Injectable({
  providedIn: 'root',
})
export class WebXPanelService {
  constructor() {}

  initializeWebXPanel(configuration: Partial<WebXPanelConfigParams>) {
    WebXPanel.initialize(configuration);
  }

  onConnect(callback: () => void) {
    WebXPanel.onConnect(callback);
  }

}