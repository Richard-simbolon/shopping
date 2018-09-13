import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPage } from '../pages/tabs/tabs';
import { MenuPage } from '../pages/menu/menu';
import { HomePage } from '../pages/home/home';

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any = TabsPage; 
  pages:any = []; 
 // menuPage:any = MenuPage;
 
  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
	  this.initializeApp();
	  
	  this.pages = [
		  { title: 'Home', icon:'home' , component: TabsPage },
		  { title: 'Catalog', icon:'list-box' , component: MenuPage },
		  { title: 'Wishlist', icon:'star-outline' , component: MenuPage },
		  { title: 'Message', icon:'mail' , component: MenuPage },
		  { title: 'Pembelian', icon:'cart' , component: MenuPage },
		  { title: 'Pengaturan', icon:'settings' , component: MenuPage },
		  { title: 'Bantuan', icon:'help' , component: MenuPage },
		  { title: 'Komplain Saya', icon:'information-circle' , component: MenuPage },
		  { title: 'Keluar', icon:'exit' , component: MenuPage }
		];
  }
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  
  openPage(page) {
    this.nav.setRoot(page.component);
  }
}
