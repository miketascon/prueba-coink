import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FirtsPagePageRoutingModule } from './firts-page-routing.module';

import { FirtsPagePage } from './firts-page.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FirtsPagePageRoutingModule,
    
  ],
  declarations: [FirtsPagePage]
})
export class FirtsPagePageModule {}
