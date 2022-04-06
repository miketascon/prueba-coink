import { AfterViewInit, Component, OnDestroy } from '@angular/core';

import { Platform } from '@ionic/angular';
import { StatusBar, Style } from '@capacitor/status-bar';
import { SplashScreen } from '@capacitor/splash-screen';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent implements AfterViewInit, OnDestroy {

  backButtonSubscription: any;
  constructor(private platform: Platform, private router: Router) {
    this.initializeApp();
  }

  async initializeApp() {
    try {
      await SplashScreen.hide();
      await StatusBar.setStyle({ style: Style.Dark });
      if (this.platform.is('android')) {
        StatusBar.setBackgroundColor({ color: '#1EEB00' });
      }
    } catch (err) {
      console.log('This is normal in a browser', err);
    }
  }

  ngAfterViewInit() {
    this.backButtonSubscription =  this.platform.backButton.subscribe(  () => {
      if (this.router.url === '/firts-page' || this.router.url === '/home' ) { 
          navigator['app'].exitApp();
      }
    });

   }
   // tslint:disable-next-line:use-lifecycle-interface
   ngOnDestroy() {
    this.backButtonSubscription.unsubscribe();
   }

}
