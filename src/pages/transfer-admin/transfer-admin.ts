import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {HomePage} from '../home/home';

/*
  Generated class for the TransferAdmin page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-transfer-admin',
  templateUrl: 'transfer-admin.html'
})
export class TransferAdminPage {

  constructor(public nav: NavController, public navParams: NavParams) {}
  home()
  {
  this.nav.setRoot(HomePage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TransferAdminPage');
  }

}
