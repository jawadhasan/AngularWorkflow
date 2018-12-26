import { Component, OnInit } from '@angular/core';
import { FrameworkConfigSettings } from './services/framework-config.service';
import { FrameworkConfigService } from './services/framework-config.service';
import { WorkflowService } from './workflow/workflow.service';
import { RegisterUserWorkFlow } from './workflow/workflow.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(
    private frameworkConfigService: FrameworkConfigService, 
    private workflowService: WorkflowService) {

    let config: FrameworkConfigSettings = {
      socialIcons: [
        { imageFile: './assets/social-fb-bw.png', alt: 'Facebook', link: 'http://www.facebook.com' },
        { imageFile: './assets/social-google-bw.png', alt: 'Google +', link: 'http://www.google.com' },
        { imageFile: './assets/social-twitter-bw.png', alt: 'Twitter', link: 'http://www.twitter.com' }
      ],
      showLanguageSelector: true,
      showUserControls: true,
      showStatusBar: true,
      showStatusBarBreakpoint: 800
    };

    frameworkConfigService.configure(config);

    this.workflowService.setWorkflow(new RegisterUserWorkFlow());  //BasicWorkFlow     //SimpleWorkFlow()   //RegisterUserWorkFlow    //LongWorkFlow


  }
}
