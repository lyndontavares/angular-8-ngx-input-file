import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InputFileConfig, InputFileModule } from 'ngx-input-file';
import { MatToolbarModule } from '@angular/material/toolbar';

const config: InputFileConfig = {
    fileAccept: '*',
    fileLimit: 4
};

@NgModule({
  imports:      [
    BrowserModule,
    BrowserAnimationsModule,
    InputFileModule.forRoot(config),
    MatToolbarModule,
    FormsModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
