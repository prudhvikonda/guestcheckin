import { Component } from '@angular/core';
import { File } from '@ionic-native/file';
import { NavController } from "ionic-angular";

import { FinishCheckinPage } from "../finish-checkin/finish-checkin";
import { GuestService } from "../../services/guest.service";
import { Guest } from "../../models/guest.model";


@Component({
  selector: 'page-preview',
  templateUrl: 'preview.html',
})
export class PreviewPage {

    guest : Guest;
    imageURL : String;

    constructor(private navCtrl: NavController,
                private guestSrvc: GuestService,
                private file: File) {}

    ionViewWillEnter() {
      this.guest = this.guestSrvc.getGuest();
      let filename = this.guest.imgLoc.substring(this.guest.imgLoc.lastIndexOf('/')+1);
      let path =  this.guest.imgLoc.substring(0,this.guest.imgLoc.lastIndexOf('/')+1);
      this.file.readAsDataURL(path, filename)
        .then(
          (res) => this.imageURL = res
        )
    }

  navigateToFinish() {
    this.navCtrl.push(FinishCheckinPage, {'imageURL': this.imageURL});
  }

  showCheckinTime() {
      var today = new Date();
      return today.getHours() + ':' + today.getMinutes();
  }
}
