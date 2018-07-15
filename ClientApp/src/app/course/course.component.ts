import { Component, OnInit } from '@angular/core';
import { CourseService } from './course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
  
})
export class CourseComponent implements OnInit {

  Course: string[]; 

  constructor(private courseService : CourseService ) {
      courseService.getCourses().subscribe(result => {
        this.Course = result;
      }, error => console.error(error));;
   }

  ngOnInit() {
  }

}
