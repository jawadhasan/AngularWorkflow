import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable, from, of } from 'rxjs';
import { delay, flatMap } from 'rxjs/operators';

import { Project } from '../../ProjectsModel/project';
import { Constants } from '../constants';



@Injectable()
export class ProjectService {

  constructor(private httpClient: HttpClient) { }

  getProjects(): Observable<Project[]> {
    // return this.httpClient.get<Project[]>(Constants.apiRoot + 'Projects');

    return from<Project[]>(of(this.GetInMemoryProjects())).pipe(delay(1000));
}


public GetInMemoryProjects():Array<Project>{
   return new Array<Project>(
    new Project(1,"Porject1"),
    new Project(1,"Porject2"),
    new Project(1,"Porject3"),
    new Project(1,"Porject4")
   )
}

}
