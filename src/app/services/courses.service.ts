import { Course } from './../models/course.model';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from "angularfire2/firestore";
import { Observable } from 'rxjs';
import { map, filter, scan } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  coursesCollection: AngularFirestoreCollection;
  courses: Observable<Course[]>;
  constructor(private db: AngularFirestore) {
    this.courses = db.collection('courses').valueChanges();
   }

   getCourses(){
     return this.courses;
   }

   filter(category: string){
     if (category == 'All') {
      this.courses = this.db.collection('courses').valueChanges()
     } else {
     this.courses = this.db.collection('courses', ref => ref.where('category', '==', category)).valueChanges()
    }
    return this.courses;
   }
}
