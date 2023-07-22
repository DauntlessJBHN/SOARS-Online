import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudentorganizationsPageRoutingModule } from './studentorganizations-routing.module';

import { StudentorganizationsPage } from './studentorganizations.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StudentorganizationsPageRoutingModule
  ],
  declarations: [StudentorganizationsPage]
})
export class StudentorganizationsPageModule {}
