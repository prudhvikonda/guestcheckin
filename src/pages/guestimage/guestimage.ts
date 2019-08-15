import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera } from "@ionic-native/camera";

import { GuestService } from "../../services/guest.service";
import { PreviewPage } from "../preview/preview";

@Component({
  selector: 'page-guestimage',
  templateUrl: 'guestimage.html',
})
export class GuestimagePage {

  constructor(private navCtrl: NavController,
              private guestSrvc: GuestService,
              private camera: Camera) {
  }

  ionViewDidEnter() {
    this.camera.getPicture({
        quality: 100,
        destinationType: this.camera.DestinationType.FILE_URI,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE,
        correctOrientation: true,
        cameraDirection: this.camera.Direction.FRONT,
        targetHeight: 512,
        targetWidth: 512
      }) //camera options
      .then(
        (imageData) => this.navigateToPreview(imageData)
      )
      .catch(
        (error) => console.log('Camera error - ' + error)
      )
  }

  navigateToPreview(imagefileLocation : String) {
    this.guestSrvc.setGuestProperty('image', imagefileLocation);
    this.navCtrl.push(PreviewPage);
  }

}
