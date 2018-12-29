import { Component, OnInit } from '@angular/core';
import { FrameworkConfigService } from '../services/framework-config.service';
import { UserApi } from '../users/user-api';


@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  constructor(private userApi: UserApi,
    private frameworkConfigService: FrameworkConfigService) { }

  ngOnInit() {
  }

  signOut() {
    this.userApi.signOut();
  }


}
