import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavController } from 'ionic-angular';

import { GuestcompanyPage } from "../guestcompany/guestcompany";
import {GuestService} from "../../services/guest.service";

@Component({
  selector: 'page-guestname',
  templateUrl: 'guestname.html',
})
export class GuestnamePage {

  constructor(private navCtrl: NavController, private guestSrvc: GuestService) {}

  navigateToCompany(form: NgForm) {
    this.guestSrvc.setGuestProperty('name', form.value.guestName);
    this.navCtrl.push(GuestcompanyPage);
  }

  ionViewDidEnter() {
    this.guestSrvc.initializeGuest();
  }

}
