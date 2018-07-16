import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';

// import {map} from 'rxjs/operators';

@Injectable()
export class CourseService {

  url: string;

  constructor(private http: HttpClient) {
    this.url = "http://localhost:5000/";
   }

  getCourses(){
    return this.http.get<string[]>(this.url + 'api/a/GetCourses');
  }



}
