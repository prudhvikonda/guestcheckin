import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { GuestlistPage } from "../guestlist/guestlist";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = GuestlistPage;

  constructor() {

  }
}
