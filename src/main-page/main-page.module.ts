import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './main-page.component';
import { AppRoutingModule } from '../../src/routing/routing.module';

import { EmplistComponent } from '../../src/emplist/emplist.component';
import { EmpaddComponent } from '../../src/empadd/empadd.component';

import { CommonModule } from '@angular/common';

@NgModule({
  imports:      [ BrowserModule, FormsModule,AppRoutingModule ],
  declarations: [ MainPageComponent ],
  bootstrap:    [ MainPageComponent ]
})
export class MainPageModule { }