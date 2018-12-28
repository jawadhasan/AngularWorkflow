import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { AccountsComponent } from './accounts.component';
import { AccountComponent } from './account/account.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: 'accounts', component: AccountsComponent },
    ])
  ],
  declarations: [
    AccountComponent,
    AccountsComponent
  ],
  entryComponents: [
    AccountComponent
  ]
})
export class AccountModule { }
