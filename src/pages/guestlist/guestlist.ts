import { Component } from '@angular/core';

import { GuestService } from "../../services/guest.service";
import {Guest} from "../../models/guest.model";

@Component({
  selector: 'page-guestlist',
  templateUrl: 'guestlist.html',
})
export class GuestlistPage {

  guestList: Guest[];

  constructor(private guestSrvc: GuestService) {
  }

  ionViewDidEnter() {
    this.guestSrvc.retrieveGuestList()
      .then(
        (data : Guest[]) => this.guestList = data
      )
      .catch(
        (error) => console.log(error)
      )
  }

}
