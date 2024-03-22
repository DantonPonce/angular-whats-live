import { environment } from '@@environment/environment';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IUser } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private http = inject(HttpClient);
  urlApi = `${environment.urlApi}/User`;

  getUser(){
    return this.http.get<IUser[]>(`${this.urlApi}`);
  }

}
