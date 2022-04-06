import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.scss'],
})
export class KeyboardComponent implements OnInit {
  @Output() sendNumberSelect = new EventEmitter<string>();
  @Output() celular = new EventEmitter<string>();
  @Output() code = new EventEmitter<string>();
  @Input() typeKeyboard: string = '';
  numberAdd = '';
  numberEnd = '';
  numberCode = '';
  disabledButtonNumber = false;
  disabledButtonSend = true;
  controlButton = true;
  constructor() {}

  ngOnInit() {
    if(this.typeKeyboard === 'phone'){
      this.controlButton = true;
    } else {
      this.controlButton = false;
    }
  }

  selectNumber(numberkey: any) {
    this.numberAdd = this.numberAdd + numberkey.id;
    if (this.typeKeyboard === 'phone') {
      if (this.numberAdd.length <= 10) {
        this.celular.emit(this.numberAdd);
        this.numberEnd = this.numberAdd;
      }
      if (this.numberAdd.length === 10) {
        this.disabledButtonNumber = true;
        this.disabledButtonSend = false;
      }
    } else {
      if (this.numberAdd.length <= 4) {
        this.code.emit(this.numberAdd);
        this.numberEnd = this.numberAdd;
      }
      if (this.numberAdd.length === 4) {
        this.sendNumberSelect.emit(this.numberEnd);
        this.disabledButtonNumber = true;
        this.disabledButtonSend = false;
      }
    }
  }

  deleteNumber() {
    if(this.typeKeyboard === 'phone'){
      if (this.numberAdd.length <= 10) {
        this.celular.emit(this.numberAdd);
        this.disabledButtonNumber = false;
        this.disabledButtonSend = true;
      }
    } else {
      if (this.numberAdd.length <= 4) {
        this.code.emit(this.numberAdd);
        this.disabledButtonNumber = false;
        this.disabledButtonSend = true;
      }
    }
    this.numberAdd = this.numberAdd.slice(0, -1);
    this.numberEnd = this.numberAdd;
  }

  sendNumber() {
    this.sendNumberSelect.emit(this.numberEnd);
  }
}
