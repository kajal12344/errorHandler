import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IEmployee } from './employee';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  public _url:string = "/assets/Data/application.json";
  constructor(private http:HttpClient)
  {}

getEmployee(): Observable<IEmployee[]>
{
  return this.http.get<IEmployee[]>(this._url).pipe(catchError(this.errorHandler));
}
errorHandler(error: HttpErrorResponse)
{
  return throwError(error.message || 'server Error');
}

}
