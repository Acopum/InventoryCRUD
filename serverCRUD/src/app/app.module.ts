import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReadComponent } from './operations/read/read.component';
import { CreateComponent } from './operations/create/create.component';
import { UpdateComponent } from './operations/update/update.component';

import { MatToolbarModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import { ServerItemService } from './server-item.service';

const routes: Routes = [
  { path: 'create', component: CreateComponent },
  { path: 'update/:id', component: UpdateComponent },
  { path: 'read', component: ReadComponent },
  { path: '', redirectTo: '/read', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    ReadComponent,
    CreateComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    MatToolbarModule
  ],
  providers: [
    ServerItemService
  ],
  bootstrap: [
    AppComponent
  ],
})
export class AppModule { }
