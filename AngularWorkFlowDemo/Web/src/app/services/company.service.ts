import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { JsRouter } from './jsRouter.service';
import { Envelop } from './envelop';
import { map, catchError } from 'rxjs/operators';

export interface ICompany {
  id: number;
  name: string;
  street: string;
  postCode: string;
  city: string;
  isActive: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private actionUrl: string;

  constructor(private jsRouter: JsRouter, private httpClient: HttpClient) {
    this.actionUrl = this.jsRouter.getFullPath('/api/companies');
  }

  getCompanies(): Observable<Envelop<ICompany[]>> {
    console.log(this.actionUrl);
    return this.httpClient.get<Envelop<ICompany[]>>(`${this.actionUrl}`);
  }

  getCompany(id: string): Observable<Envelop<ICompany>> {
    return this.httpClient.get<Envelop<ICompany>>(this.actionUrl + '/' + id);
  }

  insertCompany(company: ICompany): Observable<ICompany> {
    return this.httpClient
      .post<Envelop<ICompany>>(this.actionUrl, company)
      .pipe(
        map((data: Envelop<ICompany>) => {
          if (data) {
            return data.result;
          }
          return null;
        }),
        catchError(this.handleError)
      );
  }

  updateCompany(company: ICompany): Observable<ICompany> {
    return this.httpClient
      .put<Envelop<ICompany>>(this.actionUrl + '/' + company.id, company)
      .pipe(
        map((data: Envelop<ICompany>) => {
          if (data) {
            return data.result;
          }
          return null;
        }),
        catchError(this.handleError)
      );
  }

  deleteCompany(id: number): Observable<Envelop<any>> {
    return this.httpClient.delete<Envelop<any>>(this.actionUrl + '/' + id);
  }

  private handleError(error: HttpErrorResponse) {
    console.error('server error:', error);

    if (error.error instanceof Error) {
      const errMessage = error.error.message;
      return Observable.throw(errMessage);
    }

    return Observable.throw(error || 'ASP.NET Core server error');
  }
}
