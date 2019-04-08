import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BackgroundMode } from "@ionic-native/background-mode";

import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;
  public constructor(platform: Platform,
              statusBar: StatusBar,
              splashScreen: SplashScreen,
              backgroundMode: BackgroundMode) {
    platform.ready().then(() => {
      //Set the location
      backgroundMode.setDefaults({ silent: true });
      statusBar.show();
      splashScreen.hide();
    });
  }
}
