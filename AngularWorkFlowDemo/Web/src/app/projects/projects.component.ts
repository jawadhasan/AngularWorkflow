import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Project } from '../../ProjectsModel/project';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  displayedColumns = ["name"];
  dataSource = new MatTableDataSource();
  error: string;
  projects: Project[];
 
  constructor(private _projectService: ProjectService) {}

  ngOnInit() {
    this._projectService.getProjects().subscribe(projects => {
      this.projects = projects;
      this.dataSource.data = projects;
    }, error => console.log(error));
  }

}
