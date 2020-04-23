import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { UserInterface } from '../../interfaces';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = 'http://localhost:3000/users';
  constructor(
    private http: HttpClient
  ) { }
  getUsers(): Observable<Array<UserInterface>> {
    return this.http.get<Array<UserInterface>>(`${this.url}`)
  }
  getUser(userId: number): Observable<Array<UserInterface>> {
    return this.http.get<Array<UserInterface>>(`${this.url}/${userId}`)
  }
}

