import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SscPage } from './ssc.page';

const routes: Routes = [
  {
    path: '',
    component: SscPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SscPageRoutingModule {}
