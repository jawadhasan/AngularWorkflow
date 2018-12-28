import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ProjectsComponent } from './projects.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: 'projects', component: ProjectsComponent }
    ])
  ],
  declarations: [
    ProjectsComponent
  ]
})
export class ProjectModule { }
