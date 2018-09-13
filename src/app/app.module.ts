import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { MenuPage } from '../pages/menu/menu';
import { TabsPage } from '../pages/tabs/tabs';
import { NavigationDetailsPage  } from '../pages/contact/contact';
import { NavigationDetailsPagehome  } from '../pages/home/home';
import { HttpClientModule } from '@angular/common/http';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RestProvider } from '../providers/rest/rest';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
	MenuPage,
	NavigationDetailsPage,
	NavigationDetailsPagehome,
    TabsPage
  ],
  imports: [
    BrowserModule,
	HttpClientModule,
    IonicModule.forRoot(MyApp /* , {
		statusbarPadding: true,
	},
	{
		links :[
			{ component: NavigationDetailsPage, name: 'NavigationDetailsPage', segment: 'navigation-details' }
		]
	}
	 */
	)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
	MenuPage,
	NavigationDetailsPage,
	NavigationDetailsPagehome,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestProvider
  ]
})
export class AppModule {}
