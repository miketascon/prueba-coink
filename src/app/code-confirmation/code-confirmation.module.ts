import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from '../components/components.module';

import { CodeConfirmationPageRoutingModule } from './code-confirmation-routing.module';

import { CodeConfirmationPage } from './code-confirmation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CodeConfirmationPageRoutingModule,
    ComponentsModule
  ],
  declarations: [CodeConfirmationPage]
})
export class CodeConfirmationPageModule {}
