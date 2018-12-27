import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material/material.module';


import { appRoutes } from './app.routing';

import { JsRouter } from './services/jsRouter.service';

import { AppComponent } from './app.component';

import { TitleBarComponent } from './title-bar/title-bar.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { StatusBarComponent } from './status-bar/status-bar.component';


import { MenuComponent } from './menu/menu.component';
import { MenuItemComponent } from './menu-item/menu-item.component';

import { ContentComponent } from './content/content.component';

import { SignInComponent } from './sign-in/sign-in.component';

import { UserService } from './services/user.service';

import { CompanyService } from './services/company.service';

import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountsComponent } from './accounts/accounts.component';


import { CompanyComponent } from './company/company.component';
import { CompaniesGridComponent } from './company/companies-grid.component';
import { CapitalizePipe } from './shared/capitalize.pipe';
import { CompanyEditComponent } from './company/company-edit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccountComponent } from './accounts/account/account.component';

import { MultiStepComponent } from './multi-step/multi-step.component';
import { PersonalComponent } from './register/personal/personal.component';
import { WorkComponent } from './register/work/work.component';
import { AddressComponent } from './register/address/address.component';
import { ResultComponent } from './register/result/result.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormDataService } from './data/formData.service';
import { WorkflowService } from './workflow/workflow.service';
import { WorkflowGuard } from './workflow/workflow-guard.service';
import { VendingMachineComponent } from './vending-machine/vending-machine.component';


import { ProjectsComponent } from './projects/projects.component';
import { ProjectService } from './services/project.service';
import { RegisterStepperComponent } from './register-stepper/register-stepper.component';
import { PersonalFormComponent } from './register-stepper/personal-form/personal-form.component';
import { WorkFormComponent } from './register-stepper/work-form/work-form.component';
import { WfstepDirective } from './directives/wfstep.directive';
import { AddressFormComponent } from './register-stepper/address-form/address-form.component';
import { ResultFormComponent } from './register-stepper/result-form/result-form.component';
import { RegisterWorkflowComponent } from './register-workflow/register-workflow.component';
import { PersonalStepComponent } from './register-workflow/personal-step/personal-step.component';
import { WorkStepComponent } from './register-workflow/work-step/work-step.component';
import { AddressStepComponent } from './register-workflow/address-step/address-step.component';
import { ResultStepComponent } from './register-workflow/result-step/result-step.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,

    TitleBarComponent,
    TopBarComponent,
    StatusBarComponent,
    MenuComponent,
    MenuItemComponent,

    SignInComponent,

    DashboardComponent,
    AccountsComponent,
    CompanyComponent,
    CompaniesGridComponent,
    CapitalizePipe,
    CompanyEditComponent,
    AccountComponent,
    MultiStepComponent,
    PersonalComponent,
    WorkComponent,
    AddressComponent,
    ResultComponent,
    NavbarComponent,
    VendingMachineComponent,
    ProjectsComponent,
    RegisterStepperComponent,
    PersonalFormComponent,
    WorkFormComponent,
    WfstepDirective,
    AddressFormComponent,
    ResultFormComponent,
    RegisterWorkflowComponent,
    PersonalStepComponent,
    WorkStepComponent,
    AddressStepComponent,
    ResultStepComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MaterialModule

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
    AccountComponent, 
    PersonalFormComponent, 
    WorkFormComponent, 
    AddressFormComponent,
    ResultFormComponent
  ]
})
export class AppModule { }
