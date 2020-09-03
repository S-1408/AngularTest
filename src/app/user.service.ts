import { FormGroup, FormControl } from '@angular/forms';

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
id : number;
  baseURL = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {

  }

  form:FormGroup = new FormGroup({
    $key:new FormControl(null),
    name:new FormControl(''),
    email:new FormControl(''),
    phone:new FormControl(''),
    zipCode: new FormControl('')
  });
  getUsers(){
    return this.http.get<User>(this.baseURL);

    }
    getUserById(id: number ){
      return this.http.get<User>(this.baseURL + id);
    }


}
