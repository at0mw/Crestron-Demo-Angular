import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SwipeBladeMenuComponent } from './swipe-blade-menu/swipe-blade-menu.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { LightingControlsComponent } from './control-areas/lighting-controls/lighting-controls.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { KeypadModuleComponent } from './modules/keypad-module/keypad-module.component';
import { SettingsPageComponent } from './pages/settings-page/settings-page.component';
import { ShadeControlsComponent } from './control-areas/shade-controls/shade-controls.component';
import { SlidersModuleComponent } from './modules/sliders-module/sliders-module.component';
import { FormsModule } from '@angular/forms';
import { SliderElementComponent } from './elements/slider-element/slider-element.component';

@NgModule({
  declarations: [
    AppComponent,
    SwipeBladeMenuComponent,
    NavigationBarComponent,
    LightingControlsComponent,
    HomePageComponent,
    KeypadModuleComponent,
    SettingsPageComponent,
    ShadeControlsComponent,
    SlidersModuleComponent,
    SliderElementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
