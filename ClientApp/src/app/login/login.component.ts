import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from './login.service';
import { LoginModel} from '../shared/LoginModel';
import { AppState } from '../shared/AppState';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  msg;

  constructor(private service: LoginService,
              private appState: AppState) { }

  ngOnInit() {
  }

  OnSubmit(form: NgForm) {

    let login = new LoginModel();

    login.UserName = form.value.UserName;
    login.Password = form.value.Password;

    this.service.login(login)
      .subscribe(response =>{
        let token = (<any>response).token;
        //console.error(token);
        this.msg = 'Logn erfolgreich!\n';
        this.msg = this.msg + 'JWT-Token: ' + token;

        this.appState.publish(true);

        localStorage.setItem("jwt", token);
      },
    err => {
      console.error(err);


    });


  }

}
