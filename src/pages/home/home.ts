import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {ListPage} from '../list/list';
import {RolesPage} from '../roles/roles';
import {ApprovalsPage} from '../approvals/approvals';
import {TransferAdminPage} from '../transfer-admin/transfer-admin';
@Component({
  selector: 'page-home',
  templateUrl: './home.html'
})
export class HomePage {

  constructor(public nav: NavController) {
    
  }
  listOfBooks()
  {
    this.nav.push(ListPage);
  }
  roles()
  {
    this.nav.push(RolesPage);
  }
  approvals()
  {
    this.nav.push(ApprovalsPage);
  }
  transferAdmin()
  {
    this.nav.push(TransferAdminPage);
  }

}
