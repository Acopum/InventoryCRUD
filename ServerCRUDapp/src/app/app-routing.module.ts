import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReadComponent } from './read/read.component';
import { UpdateComponent } from './update/update.component';
import { CreateComponent } from './create/create.component';

const routes: Routes = [
  {
    path: 'server/create',
    component: CreateComponent
  },
  {
    path: 'server/update/:id',
    component: UpdateComponent
  },
  {
    path: 'server',
    component: ReadComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
