import { Injectable } from '@angular/core';
import { Name } from '../shared/name.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';




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


  insertName(name: Name) : Observable<string> {

    const body: Name = {
      Name: name.Name,
      Vorname: name.Vorname
    };

    return this.http.post<string>(this.rootUrl + 'api/b/name', body);
    
  }

}
