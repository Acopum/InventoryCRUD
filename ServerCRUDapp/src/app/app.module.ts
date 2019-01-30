import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReadComponent } from './read/read.component';
import { UpdateComponent } from './update/update.component';
import { CreateComponent } from './create/create.component';

import {ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {ServerService} from './server.service';

@NgModule({
  declarations: [
    AppComponent,
    ReadComponent,
    UpdateComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    ServerService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
