import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';

import { User,Credentials } from './user';
import { UriService } from '../uri.service';

@Injectable()
export class RegisterService {
  userMicroServiceUrl: string;
  constructor(private http: HttpClient, private uriService: UriService) {
    this.userMicroServiceUrl = this.uriService.buildUserMicroServiceUri();
  }

  //To be called when login is initiated
  login(userCredential:Credentials): Observable<User> {
    return this.http.post(this.userMicroServiceUrl+'login',userCredential) as Observable<User>;
  }

  //To be called when logout is initiated
  logout(): Observable<User> {
    return this.http.get(this.userMicroServiceUrl+'logout') as Observable<User>;
  }

  //To be called when userDetails are to be fetched
  getUserDetail(uEmail:string): Observable<User> {
    return this.http.get(this.userMicroServiceUrl+'userDetail', {params:{'uEmail':uEmail}}) as Observable<User>;
  }
  
  //To be called when a user wnats to get registered
  registerUser(newUser:User): Observable<User> {
    return this.http.post(this.userMicroServiceUrl+'register',newUser) as Observable<User>;
  }

  //To check whether particular email is already registered or not.
  check(emailId:string): Observable<User>{
    return this.http.get<any>(this.userMicroServiceUrl+'register/search/'+emailId)
  }
}


