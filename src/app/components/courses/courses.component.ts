import { Course } from './../../models/course.model';
import { CoursesService } from './../../services/courses.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  courses: Course[];
  categories: Array<any>
  courses1: Course[];
  courses2: Course[];
  constructor(private coursesService: CoursesService) { 
    this.categories = ['All', 'IT', 'Arts', 'Management', 'Languages', 'Sports'] 
  }

  ngOnInit() {
    this.coursesService.getCourses().subscribe(courses => {
      this.courses = courses;
      let array1 = courses
      let array2 = array1.splice(0, Math.ceil(array1.length / 2));
      this.courses1 = array1
      this.courses2 = array2
    })
  }

  filterCategory(category){
    this.coursesService.filter(category).subscribe(courses => {
      this.courses = courses;
      let array1 = courses.slice()
      let array2 = array1.splice(0, Math.ceil(array1.length / 2));
      this.courses1 = array1
      this.courses2 = array2
    })
  }

}
