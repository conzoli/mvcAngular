import { Injectable } from '@angular/core';

import { LoginModel} from '../shared/LoginModel';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class LoginService {

  constructor(private http: HttpClient) { }



  login(login: LoginModel) {

    console.error(login.UserName);
    console.error(login.Password);

    let apiUrl = 'https://localhost:5001/api/auth/login';

    let credentials = JSON.stringify(login);

    return this.http.post(apiUrl, credentials, {
      headers: new HttpHeaders ({
        "Content-Type": "application/json"
      })
    });

  }

}
