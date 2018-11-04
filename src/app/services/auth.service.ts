import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private _registeredUrl = 'http://localhost:3000/api/register';
  private _loginUrl = 'http://localhost:3000/api/login';

  constructor(private http: HttpClient) {}

    registerUser(user)  {
      return this.http.post<any>(this._registeredUrl, user);
   }
    loginUser(user)  {
    return this.http.post<any>(this._loginUrl, user);
   }
   loggedin() {
     return !!localStorage.getItem('token');
   }
   getToken() {
     localStorage.getItem('token');
   }
}
