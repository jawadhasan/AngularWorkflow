import { Component, OnInit } from '@angular/core';
import { WorkflowService } from '../../workflow/workflow.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor( private workflowService: WorkflowService) { }

  ngOnInit() {
  }

  getTabClass(tabIndex: number): string {

    switch (tabIndex) {
      case 0:
        return "round-tabs one";

      case 1:
        return "round-tabs two";

      case 2:
        return "round-tabs three";

      case 3:
        return "round-tabs four";

      default:
        return "round-tabs one";
    }
  }
}
