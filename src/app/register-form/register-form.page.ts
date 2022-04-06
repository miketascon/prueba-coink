import { Component, OnInit, ViewChild } from '@angular/core';
import {
  IonDatetime,
  PopoverController,
  AlertController,
  LoadingController
} from '@ionic/angular';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { format, parseISO } from 'date-fns';
import { CoinkService } from '../services/coink.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.page.html',
  styleUrls: ['./register-form.page.scss'],
})
export class RegisterFormPage implements OnInit {
  @ViewChild(IonDatetime, { static: true }) datetime: IonDatetime;

  dateValue1 = '';
  dateValue2 = '';
  datePopover = false;
  documentTypes: any;
  genders: any;
  errorData = false;
  showPin = false;
  showPinConfirm = false;
  typePin = 'password';
  nameIcon = 'eye';
  typePinConfirm = 'password';
  nameIconConfirm = 'eye';
  form: FormGroup;
  phone = '';
  loading: any;

  constructor(
    private router: Router,
    private popoverController: PopoverController,
    private alertController: AlertController,
    private formBuilder: FormBuilder,
    public coinkService: CoinkService,
    private activatedRoute: ActivatedRoute,
    public loadingController: LoadingController
  ) {
    this.phone = this.activatedRoute.snapshot.paramMap.get('phone');
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      documentType: ['', [Validators.required]],
      documentNumber: [
        '',
        [Validators.required, Validators.pattern(/^[\+]?[(]?[0-9]{3,15}/im)],
      ],
      dateExpedition: ['', [Validators.required]],
      birthday: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      email: [
        '',

        [
          Validators.required,
          Validators.pattern(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/),
        ],
      ],
      emailConfirm: [
        '',

        [
          Validators.required,
          Validators.pattern(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/),
        ],
      ],
      pin: [
        '',
        [Validators.required, Validators.pattern(/^[\+]?[(]?[0-9]{4}/im)],
      ],
      pinConfirm: [
        '',
        [Validators.required, Validators.pattern(/^[\+]?[(]?[0-9]{4}/im)],
      ],
    });
    this.presentLoading();
    this.getDocumentTypes();
    this.getGenders();
    setTimeout(() => {
      if (this.errorData) {
        this.getAlertError();
      }
    }, 500);
  }

  async presentLoading() {
    this.loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Por favor espere...',
      duration: 2000
    });
    await this.loading.present();

  }

  showPinElement(element: string) {
    if (element === 'pin') {
      this.showPin = !this.showPin;
      if (this.showPin) {
        this.typePin = 'text';
        this.nameIcon = 'eye-off';
      } else {
        this.typePin = 'password';
        this.nameIcon = 'eye';
      }
    } else {
      this.showPinConfirm = !this.showPinConfirm;
      if (this.showPinConfirm) {
        this.typePinConfirm = 'text';
        this.nameIconConfirm = 'eye-off';
      } else {
        this.typePinConfirm = 'password';
        this.nameIconConfirm = 'eye';
      }
    }
  }

  getDocumentTypes() {
    this.coinkService.getDocumentTypes().subscribe(
      (data) => {
        this.documentTypes = data;
        this.loading.onDidDismiss();
      },
      (error) => {
        this.errorData = true;
      }
    );
  }

  getGenders() {
    this.coinkService.getGenders().subscribe(
      (data) => {
        this.genders = data;
        this.loading.onDidDismiss();
      },
      (error) => {
        this.errorData = true;
      }
    );
  }

  async getAlertError() {
    const alert = await this.alertController.create({
      cssClass: 'alert-confirm-code',
      header: 'ERROR INEXPERADO',
      message: 'Hubo un error por favor intentelo mas tarde.',
      buttons: [
        {
          text: 'Aceptar',
          id: 'confirm-button',
          handler: () => {
            this.router.navigate(['/firts-page']);
          },
        },
      ],
    });

    await alert.present();
  }

  formatDate(value: string) {
    this.popoverController.dismiss();
    return format(parseISO(value), 'MM/dd/yyyy');
  }

  save() {

    const data = {
      phone: this.phone,
      data: this.form.value
    }

    localStorage.setItem('data', JSON.stringify(data));
    
    setTimeout(() => {
      this.router.navigate(['contract'])
    }, 500)

    
  }
}
