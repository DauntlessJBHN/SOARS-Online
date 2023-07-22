import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentorganizationsPage } from './studentorganizations.page';

const routes: Routes = [
  {
    path: '',
    component: StudentorganizationsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentorganizationsPageRoutingModule {}
