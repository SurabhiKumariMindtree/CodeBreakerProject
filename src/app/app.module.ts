import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {ListPage} from '../pages/list/list';
import {RolesPage} from '../pages/roles/roles';
import {ApprovalsPage} from '../pages/approvals/approvals';
import {TransferAdminPage} from '../pages/transfer-admin/transfer-admin';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    RolesPage,
    ApprovalsPage,
    TransferAdminPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
 
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    RolesPage,
    ApprovalsPage,
    TransferAdminPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
