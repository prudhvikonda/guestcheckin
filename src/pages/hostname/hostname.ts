import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { GuestService } from "../../services/guest.service";
import { GuestimagePage } from "../guestimage/guestimage";
import { OtherhostPage } from "../otherhost/otherhost";

@Component({
  selector: 'page-hostname',
  templateUrl: 'hostname.html',
})
export class HostnamePage {

  showList: boolean = false;
  completeHostList: string[];
  hosts: string[];
  OTHER_HOST_TYPE: string = 'Other Employee';

  constructor(private navCtrl: NavController, private guestSrvc: GuestService) {
    this.initializeHostList();
  }

  initializeHostList() {
    this.completeHostList = ["Prudhvi Konda", "ABC"]
  }

  getHostList(ev: any) {
    // Copy the array for filtering
    this.hosts = Array.from(this.completeHostList);

    // set val to the value of the searchbar
    console.log(ev);
    let val = ev.target.value;

    // if the value is an empty string don't filter
    if (val && val.trim() != '') {

      // Filter the items
      this.hosts = this.hosts.filter((host) => {
        return (host.toLowerCase().indexOf(val.toLowerCase()) > -1);
      }).slice(0,5);

      if(this.hosts.length == 0) this.hosts.push(this.OTHER_HOST_TYPE);

      // Show the results
      this.showList = true;
    } else {

      // hide the results when the query is empty
      this.showList = false;
    }
  }

  selectHost(ev : any) {
    this.showList = false;
    if(this.OTHER_HOST_TYPE == ev) {
      this.navCtrl.push(OtherhostPage);
    } else {
      this.guestSrvc.setGuestProperty('host', ev);
      this.navCtrl.push(GuestimagePage);
    }
  }

}
