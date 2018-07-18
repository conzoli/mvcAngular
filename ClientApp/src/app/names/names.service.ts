import { Injectable } from '@angular/core';
import { Name } from '../shared/name.model';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class NamesService {

  names: Name[];

  readonly rootUrl = 'http://localhost:5000/';

  constructor(private http: HttpClient) {
    this.fillDemoData();
  }

  fillDemoData() {
    this.names = new Array<Name>();

    let humer = new Name();

    humer.Name = 'Simpson';
    humer.Vorname = 'Humer';

    this.names.push(humer);

    let Marge = new Name();

    Marge.Name = 'Simpson';
    Marge.Vorname = 'Marge';

    this.names.push(Marge);


  }

  getNames() {
    return this.names;
  }


  insertName(name: Name) {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'my-auth-token'
      })
    };

    const body: Name = {
      Name: name.Name,
      Vorname: name.Vorname
    };

    return this.http.post(this.rootUrl + 'api/b/name', body, httpOptions);
  }

}
