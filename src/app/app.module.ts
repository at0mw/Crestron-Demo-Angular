import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SwipeBladeMenuComponent } from './swipe-blade-menu/swipe-blade-menu.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { LightingControlsComponent } from './lighting-controls/lighting-controls.component';

@NgModule({
  declarations: [
    AppComponent,
    SwipeBladeMenuComponent,
    NavigationBarComponent,
    LightingControlsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
