import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Printer } from '@ionic-native/printer';
import { Geolocation } from '@ionic-native/geolocation';
import { NativeGeocoder, NativeGeocoderReverseResult } from '@ionic-native/native-geocoder';
import { HTTP } from "@ionic-native/http";

import { GuestService } from "../../services/guest.service";

@Component({
  selector: 'page-finish-checkin',
  templateUrl: 'finish-checkin.html',
})
export class FinishCheckinPage {

  imageURL : String;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public guestSrvc: GuestService,
              public printer: Printer,
              public geoLocation: Geolocation,
              public http: HTTP,
              public nativeGeocoder: NativeGeocoder) {
  }

  showHost() {
    return this.guestSrvc.getGuest().hostName;
  }

  ngOnInit(){
    //Save Guest
    this.imageURL = this.navParams.get('imageURL');
    this.saveGuestWithLocation();
    //this.saveGuestWithoutLocation()
  }

  async saveGuestWithLocation(){
    try {
      var location = await this.geoLocation.getCurrentPosition();
      var geoCoderReverseResults : Array<NativeGeocoderReverseResult> = await this.nativeGeocoder.reverseGeocode(location.coords.latitude,
        location.coords.longitude);
      this.guestSrvc.setGuestLocation(geoCoderReverseResults[0].countryCode, geoCoderReverseResults[0].postalCode);
      this.guestSrvc.saveGuest();
      this.http.setDataSerializer('json');
      await this.printer.print(this.getContentForPrinting(), this.getPrintOptions());
      //await this.http.put('http://blahblah/in/', this.getBodyJsonToPost(), {'Content-Type' : 'application/json'});
      setTimeout(() => { this.navCtrl.popToRoot() }, 2000);
    } catch(error) {
      alert('ERROR:' + JSON.stringify(error));
      console.log('Guest Save Error - ' + error.toString());
    }
  }

  getBodyJsonToPost() {
    var d = this.guestSrvc.getGuest().checkinDate;
    var month = d.getMonth() + 1;
    var bodyJson = [{
      'name': this.guestSrvc.getGuest().guestName,
      'company': this.guestSrvc.getGuest().company,
      'datetm': d.getFullYear() + '-' + month + '-' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds(),
      'employee': this.guestSrvc.getGuest().hostName,
      'office': this.guestSrvc.getGuest().country
    }];
    return bodyJson;
  }

  // saveGuestWithoutLocation() {
  //   this.guestSrvc.saveGuest();
  //   this.printBadge();
  // }
  //
  // printBadge() {
  //   this.printer.print(this.getContentForPrinting())
  //     .then(
  //       (res) => {
  //         //Pop To Root
  //         setTimeout(() => {
  //           this.navCtrl.popToRoot();
  //         }, 2000)
  //       }
  //     )
  //     .catch(
  //       (error) => console.log(error)
  //     );
  // }

  getPrintOptions() {
    var printOptions =  {
      name: this.guestSrvc.getGuest().guestName + '- print',
      orientation: 'landscape',
      monochrome: false,
      photo: true,
      /*
      paper: {
        width: '6.09cm',
        height: '9.90cm'
      },*/
      margin: {
        top: '18pt',
        bottom: '9pt',
        left: '9pt',
        right: '0pt'
      }
    };
    return printOptions;
  }

  getContentForPrinting() : string {
    var printContent = '<html>' +
      '<body>' +
      '<div style="float:left; padding:13px; border-bottom:5px">' +
      '<img width="210" height="140" src="' + this.imageURL + '" border="1" style="border-width:1px 2px 2px 1px;border-color:#bbbbbb">' +
      '</div>' +
      '<div style="float:left;">' +
      '<p style="overflow: hidden;height:60px; width:250px;margin:0;padding-top:20px;font-size: 24px;font-family: Ubuntu,sans-serif;">' + this.guestSrvc.getGuest().guestName + '</p>' +
      '<p style="overflow: hidden;height:34px; width:250px;margin:0;font-size: 14px;font-family: Ubuntu,sans-serif; color:#444444;">Visiting:' + this.guestSrvc.getGuest().hostName + '</p>' +
      '</div>' +
      '</body>' +
      '</html>';
    return printContent;
  }

  // saveGuestWithLocation() {
  //   //Set the location
  //   this.geoLocation.getCurrentPosition()
  //     .then(
  //       (location) => {
  //         alert(location.coords.latitude + '----' + location.coords.longitude);
  //         this.nativeGeocoder.reverseGeocode(location.coords.latitude, location.coords.longitude)
  //           .then(
  //             (res: NativeGeocoderReverseResult[]) => {
  //               alert(res[0]);
  //               //this.guestSrvc.setGuestLocation(res[0].countryCode, res[0].postalCode);
  //               this.saveGuestWithoutLocation();
  //             }
  //           )
  //           .catch(
  //             (error) => {
  //               alert('Native Geocoder Error - ' + error);
  //             }
  //           );
  //       }
  //     )
  //     .catch(
  //       (error) => {
  //         alert('Geo-Locator Error - ' + error);
  //       }
  //     );
  // }

}
