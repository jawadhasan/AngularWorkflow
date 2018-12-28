import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { appRoutes } from './app.routing';

import { JsRouter } from './services/jsRouter.service';
import { AppComponent } from './app.component';

import { TitleBarComponent } from './title-bar/title-bar.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { StatusBarComponent } from './status-bar/status-bar.component';
import { ContentComponent } from './content/content.component';

import { SignInComponent } from './sign-in/sign-in.component';
import { UserService } from './services/user.service';

import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountsComponent } from './accounts/accounts.component';

import { CompanyService } from './services/company.service';


import { AccountComponent } from './accounts/account/account.component';


import { FormDataService } from './data/formData.service';
import { WorkflowService } from './workflow/workflow.service';
import { WorkflowGuard } from './workflow/workflow-guard.service';
import { VendingMachineComponent } from './vending-machine/vending-machine.component';

import { ProjectService } from './services/project.service';

import { CompanyModule } from './company/company.module';
import { OnboardingModule } from './onboarding/onboarding.module';
import { DynamicwfModule } from './dynamicwf/dynamicwf.module';
import { RegisterModule } from './register/register.module';
import { MenuModule } from './menu/menu.module';
import { SharedModule } from './shared/shared.module';
import { ProjectModule } from './projects/project.module';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,

    TitleBarComponent,
    TopBarComponent,
    StatusBarComponent,

    SignInComponent,

    DashboardComponent,
    AccountsComponent,

    AccountComponent,

    VendingMachineComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    ReactiveFormsModule,
    HttpClientModule,

    CompanyModule,
    ProjectModule,
    OnboardingModule,
    DynamicwfModule,
    RegisterModule,
    MenuModule,
    RouterModule.forRoot(appRoutes),
    
  ],
  providers: [
    JsRouter,
    UserService,
    CompanyService,
    WorkflowGuard,
    FormDataService,
    WorkflowService,
    ProjectService,
    FormBuilder
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    AccountComponent
  ]
})
export class AppModule { }
