import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-code-confirmation',
  templateUrl: './code-confirmation.page.html',
  styleUrls: ['./code-confirmation.page.scss'],
})
export class CodeConfirmationPage implements OnInit {
  @Output() code = new EventEmitter<string>();
  codeNumber = '';
  phone = '';
  loading: any

  constructor(
    private alertController: AlertController,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    public loadingController: LoadingController
  ) {
    this.phone = this.activatedRoute.snapshot.paramMap.get('phone');
  }

  ngOnInit() {}

  async presentLoading() {
    this.loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Por favor espere...',
      duration: 2000
    });
    await this.loading.present();

  }

  onNumberPhone(event) {
    this.codeNumber = event;
    this.code.emit(event);
  }

  onSendNumberSelect(event) {
    console.log(event);
    if (event === '3333') {
      setTimeout(() => {
        this.alertConfirmCode();
      },500)
    } else {

      this.presentLoading();

      setTimeout(() => {
        this.loading.onDidDismiss();
        this.router.navigate(['/register-form/' + this.phone]);
      }, 2000);
      
    }
  }

  async alertConfirmCode() {
    const alert = await this.alertController.create({
      cssClass: 'alert-confirm-code',
      header: 'CÓDIGO INCORRECTO',
      message:
        'El código que ingresaste es incorrecto, enviaremos un nuevo código a tu número de celular.',
      buttons: [
        {
          text: 'Reenviar código',
          id: 'confirm-button',
          handler: () => {
            console.log('Confirm Okay');
          },
        },
      ],
    });

    await alert.present();
  }
}
