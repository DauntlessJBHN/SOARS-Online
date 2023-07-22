import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentcouncilsPage } from './studentcouncils.page';

const routes: Routes = [
  {
    path: '',
    component: StudentcouncilsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentcouncilsPageRoutingModule {}
