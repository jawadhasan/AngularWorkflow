import { Component, OnInit } from '@angular/core';

import { FrameworkConfigService } from '../../services/framework-config.service';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  constructor(private userApi: UserService,
    private frameworkConfigService: FrameworkConfigService) { }

  ngOnInit() {
  }

  signOut() {
    this.userApi.signOut();
  }


}
