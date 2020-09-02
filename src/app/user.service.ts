
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
// import { Observable } from 'rxjs';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseURL = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {

  }
  getUsers(){
    return this.http.get<User>(this.baseURL);

    }

}
