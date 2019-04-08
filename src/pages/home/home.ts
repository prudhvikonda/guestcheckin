import { Component } from '@angular/core';

import { GuestnamePage } from "../guestname/guestname";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  namePage = GuestnamePage;

}
