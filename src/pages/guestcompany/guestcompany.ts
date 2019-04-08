import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";
import { NavController } from 'ionic-angular';

import { HostnamePage } from "../hostname/hostname";
import {GuestService} from "../../services/guest.service";


@Component({
  selector: 'page-guestcompany',
  templateUrl: 'guestcompany.html',
})
export class GuestcompanyPage {

  constructor(private navCtrl: NavController, private guestSrvc: GuestService) {
  }

  navigateToHost(form : NgForm) {
    this.guestSrvc.setGuestProperty('company', form.value.companyName);
    this.navCtrl.push(HostnamePage);
  }

}
