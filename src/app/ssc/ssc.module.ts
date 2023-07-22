import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SscPageRoutingModule } from './ssc-routing.module';

import { SscPage } from './ssc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SscPageRoutingModule
  ],
  declarations: [SscPage]
})
export class SscPageModule {}
