
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KeyboardComponent } from './keyboard/keyboard.component';
import { InputNumberComponent } from './input-number/input-number.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [KeyboardComponent, InputNumberComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule

  ], 
  exports: [KeyboardComponent, InputNumberComponent],

})
export class ComponentsModule { }