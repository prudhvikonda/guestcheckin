import { Guest } from "../models/guest.model";
import { Storage } from '@ionic/storage';
import { Injectable } from "@angular/core";

@Injectable()
export class GuestService {

  private guest: Guest;

  constructor(private storage: Storage) {}

  initializeGuest() {
    this.guest = new Guest();
    this.guest.country = 'US';
    this.guest.zipcode = '30306';
  }

  setGuestProperty(prop: String, value: String) {
    if(prop == 'name') {
      //var fullNameWords = value.split(' ');
      //var lastName = fullNameWords[fullNameWords.length - 1];
      //this.guest.lastName = lastName;
      //if(fullNameWords.length >1) this.guest.firstName = value.replace(lastName, '').trim();
      this.guest.guestName = value;
    } else if(prop == 'company') {
      this.guest.company = value;
    } else if(prop == 'host') {
      this.guest.hostName = value;
    } else if(prop == 'image') {
      this.guest.imgLoc = value;
    }
  }

  setGuestLocation(countryCode: String, postalCode: String) {
    this.guest.country = countryCode;
    this.guest.zipcode = postalCode;
  }

  setGuestTime() {
    this.guest.checkinDate = new Date();
  }

  getGuest() : Guest {
    return this.guest;
  }

  retrieveGuestList() {
    return this.storage.get(this.getGuestListStorageKey())
      .then(
        (data : Guest[]) => {
          var guestList = data != null ? data : [];
          return guestList;
        }
      )
      .catch(
        (error) => console.log(error)
      );
  }

  saveGuest() {
    this.setGuestTime();
    this.retrieveGuestList()
      .then(
        (data : Guest[]) => {
            data.push(this.guest);
            this.storage.set(this.getGuestListStorageKey(), data)
              .catch( (error) => console.log(error) )
        }
      )
      .catch(
        (error) => console.log(error)
      )
  }

  getGuestListStorageKey() : string {
    var today = new Date();
    return (today.getMonth() + 1) + '-' + today.getDate() + '-' + today.getFullYear();
  }

}
