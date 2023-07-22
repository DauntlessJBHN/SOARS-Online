import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudentcouncilsPageRoutingModule } from './studentcouncils-routing.module';

import { StudentcouncilsPage } from './studentcouncils.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StudentcouncilsPageRoutingModule
  ],
  declarations: [StudentcouncilsPage]
})
export class StudentcouncilsPageModule {}
