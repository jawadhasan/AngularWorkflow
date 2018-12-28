import { Component, Input, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

import { IMenuItem } from '../../services/menu.service';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {
  @Input() item: IMenuItem;
  isActiveRoute = false;

  constructor(private router: Router) { }

  ngOnInit() {
    this.checkActiveRoute(this.router.url);

    this.router.events
      .subscribe((event) => {
        if (event instanceof NavigationEnd) {
          this.checkActiveRoute(event.url);
          //console.log(event.url + ' ' + this.item.route + ' ' + this.isActiveRoute);
        }
      });
  }

  checkActiveRoute(route: string) {
    this.isActiveRoute = (route ==  this.item.route);
  }
    onClick(event): void {
    event.stopPropagation();
    this.router.navigate(['/' + this.item.route]);
  }

}
