import { Routes } from '@angular/router';

import { SignInComponent } from './sign-in/sign-in.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountsComponent } from './accounts/accounts.component';
import { VendingMachineComponent } from './vending-machine/vending-machine.component';
import { ProjectsComponent } from './projects/projects.component';

export const appRoutes: Routes = [
 
  { path: 'dashboard', component: DashboardComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'vendingMachine', component: VendingMachineComponent },
  { path: 'accounts', component: AccountsComponent },
  { path: '', component: SignInComponent },
  { path: '**', component: SignInComponent }

];
