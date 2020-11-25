import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ImageUploadModule} from './image-upload/image-upload.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ImageUploadModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
