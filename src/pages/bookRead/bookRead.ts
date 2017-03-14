import { Component } from '@angular/core';
import { TabsPage } from '../pages/tabs/tabs';
import { NavController } from 'ionic-angular';
import {HelpPage} from '../pages/help/help';
import { NotificationPage } from '../pages/notification/notification';
import { SearchPage } from './../pages/search/search';
import { HomePage } from '../pages/home/home';
@Component({
  selector: 'page-bookRead',
  templateUrl: 'bookRead.html'
})
export class BookReadPage {

  constructor(public navCtrl: NavController) {

  }

}