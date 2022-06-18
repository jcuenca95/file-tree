import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FeaturesModule } from './features/features.module';
import { MaterialModule } from './material/material.module';
import { InputDirectoryComponent } from './components/header/input-directory/input-directory.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, InputDirectoryComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FeaturesModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
