import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavController } from 'ionic-angular';

import { GuestimagePage } from "../guestimage/guestimage";
import { GuestService } from "../../services/guest.service";

@Component({
  selector: 'page-otherhost',
  templateUrl: 'otherhost.html',
})
export class OtherhostPage {

  constructor(private navCtrl: NavController, private guestSrvc: GuestService) {}

  navigateToGuestImage(form: NgForm) {
    this.guestSrvc.setGuestProperty('host', form.value.hostName);
    this.navCtrl.push(GuestimagePage);
  }

}



