import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { ContasPage } from '../pages/contas/contas';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  private home = HomePage;
  private contas = ContasPage;

  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {

      this.home = HomePage;
      this.contas = ContasPage;

      this.rootPage = this.home;

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      // Ok, então a plataforma está pronta e nossos plugins estão disponíveis.
      // Aqui você pode fazer qualquer nível superior de coisas nativas que você pode precisar.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    }

    openPage(opcao){
      this.rootPage = opcao;
    };


}
