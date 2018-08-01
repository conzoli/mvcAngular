import { Component, OnInit } from '@angular/core';
import { CourseService } from './course.service';
import { Router } from '@angular/router';
import { AppState } from '../shared/AppState';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']

})
export class CourseComponent implements OnInit {

  Course: string[];

  color = 'black';

  constructor(private courseService: CourseService,
              private router: Router,
              private appState: AppState ) {
      courseService.getCourses().subscribe(result => {
        this.Course = result;
      }, error => {
        console.error(error);
        appState.publish(false);
        this.router.navigate(["/login"]);
      });
   }

  ngOnInit() {
  }

  onClickChangeColor(newColor: string) {
    this.color = newColor;
  }

  onClickGreen() {
    this.color = 'green';
  }



}
