import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {HomePage} from './pages/home/home'
/*
  Generated class for the Approvals page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-approvals',
  templateUrl: 'approvals.html'
})
export class ApprovalsPage {

  constructor(public nav: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ApprovalsPage');
  }

  // home()
  // {
  //   this.nav.setRoot(HomePage);

  // }

}
