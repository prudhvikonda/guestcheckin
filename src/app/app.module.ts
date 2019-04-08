import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Geolocation } from '@ionic-native/geolocation';
import { NativeGeocoder } from '@ionic-native/native-geocoder';
import { Camera } from '@ionic-native/camera';
import { Printer } from '@ionic-native/printer';
import { BackgroundMode } from "@ionic-native/background-mode";
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicStorageModule } from '@ionic/storage';
import { File } from '@ionic-native/file';
import { HTTP } from '@ionic-native/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { GuestlistPage } from "../pages/guestlist/guestlist";
import { TabsPage } from '../pages/tabs/tabs';
import { GuestnamePage } from "../pages/guestname/guestname";
import { GuestcompanyPage } from "../pages/guestcompany/guestcompany";
import { HostnamePage } from "../pages/hostname/hostname";
import { OtherhostPage } from "../pages/otherhost/otherhost";
import { FinishCheckinPage } from "../pages/finish-checkin/finish-checkin";
import { GuestimagePage } from "../pages/guestimage/guestimage";
import { PreviewPage } from "../pages/preview/preview";
import { GuestService } from "../services/guest.service";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    GuestlistPage,
    GuestnamePage,
    GuestcompanyPage,
    HostnamePage,
    OtherhostPage,
    GuestimagePage,
    PreviewPage,
    FinishCheckinPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    GuestlistPage,
    GuestnamePage,
    GuestcompanyPage,
    HostnamePage,
    OtherhostPage,
    GuestimagePage,
    PreviewPage,
    FinishCheckinPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Geolocation,
    NativeGeocoder,
    Camera,
    Printer,
    File,
    HTTP,
    BackgroundMode,
    GuestService
  ]
})
export class AppModule {}
