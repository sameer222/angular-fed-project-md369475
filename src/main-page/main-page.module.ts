import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './main-page.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ MainPageComponent, ],
  bootstrap:    [ MainPageComponent ]
})
export class MainPageModule { }