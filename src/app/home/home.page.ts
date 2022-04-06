import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  data = {
    data: {
      birthday: '',
      dateExpedition: '',
      documentNumber: '',
      documentType: '',
      email: '',
      emailConfirm: '',
      gender: '',
      pin: '',
      pinConfirm: '',
    },

    phone: '',
  };

  constructor() {}

  ngOnInit() {
    setTimeout(() => {
      this.data = JSON.parse(localStorage.getItem('data'));
    }, 500);
  }
}
