import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// import {map} from 'rxjs/operators';

@Injectable()
export class CourseService {

  url: string;

  constructor(private http: HttpClient) {
    this.url = "https://localhost:5001/";
   }

  getCourses(){

    var token = localStorage.getItem("jwt");

    console.error(token);

    return this.http.get<string[]>(this.url + 'api/a/GetCourses', {
      headers: new HttpHeaders({
        "Authorization": "Bearer " + token,
        "Content-Type": "application/json"
      })
    });
  }



}
