import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from "angularfire2";
import { AngularFirestoreModule } from "angularfire2/firestore";
import { environment } from '../environments/environment';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { NavbarComponent } from './components/navbar/navbar.component';
import { SuccessStoryComponent } from './components/success-story/success-story.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { WhyusComponent } from './components/whyus/whyus.component';
import { CoursesComponent } from './components/courses/courses.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { CoursesService } from './services/courses.service';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './components/about/about.component';
import {FormComponent} from './components/form/form.component';

const appRoutes: Routes = [
  {
    path: 'courses', component: CoursesComponent
  },
  {
    path: '', component: HomePageComponent
  },
  {
    path: 'contact', component: FormComponent
  },
  {
    path: 'about', component: AboutComponent
  }
  ];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SuccessStoryComponent,
    FooterComponent,
    CarouselComponent,
    WhyusComponent,
    CoursesComponent,
    HomePageComponent,
    AboutComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment, 'jugend-college'),
    AngularFirestoreModule,
    FormsModule
  ],
  providers: [CoursesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
