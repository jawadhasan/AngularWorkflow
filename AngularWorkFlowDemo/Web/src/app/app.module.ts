import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { appRoutes } from './app.routing';
import { AppComponent } from './app.component';

import { SignInComponent } from './sign-in/sign-in.component';
import { UserService } from './services/user.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VendingMachineComponent } from './vending-machine/vending-machine.component';

import { CompanyModule } from './company/company.module';
import { AccountModule } from './accounts/account.module';
import { ProjectModule } from './projects/project.module';
import { OnboardingModule } from './onboarding/onboarding.module';
import { DynamicwfModule } from './dynamicwf/dynamicwf.module';
import { RegisterModule } from './register/register.module';
import { SharedModule } from './shared/shared.module';

import { FwModule } from '../fw/fw.module';
import { UserApi } from '../fw/users/user-api';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    DashboardComponent,
    VendingMachineComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    ReactiveFormsModule,
    HttpClientModule,

    FwModule,
    CompanyModule,
    AccountModule,
    ProjectModule,
    OnboardingModule,
    DynamicwfModule,
    RegisterModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    UserService,
    { provide: UserApi, useExisting: UserService },
    FormBuilder
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
