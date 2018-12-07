import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';

@Injectable()
export class JsRouter {
  private hostUrl: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location) {
// this.hostUrl = window.location.origin;
    this.hostUrl = 'http://localhost:5000';
  }

  getFullPath(actionUrl: string): string {
    const normalizedUrl = this.location.normalize(actionUrl);
    return Location.joinWithSlash(this.hostUrl, normalizedUrl);
  }

  navigate(path: string, param?: string | number): void {
    if (!param) {
      this.router.navigate([path], { relativeTo: this.route });
    } else {
      this.router.navigate([path, param], { relativeTo: this.route });
    }
  }
}
