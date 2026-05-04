import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { App } from '../app';
import { Observable, observable } from 'rxjs';
import { apiREsponse, Application } from '../model/app.model';

@Injectable({
  providedIn: 'root',
})
export class Master {
  constructor(private http: HttpClient) {
  }
  addNewapp(obj: Application): Observable<apiREsponse> {
    return this.http.post<apiREsponse>('https://projectapi.gerasim.in/api/BankLoan/AddNewApplication', obj)
  }
}
