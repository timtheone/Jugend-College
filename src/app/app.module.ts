import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SuccessStoryComponent } from './components/success-story/success-story.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { WhyusComponent } from './components/whyus/whyus.component';
import { CoursesComponent } from './components/courses/courses.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { SuccesspageComponent } from './components/successpage/successpage.component';


const appRoutes: Routes = [
  {
    path: 'courses', component: CoursesComponent
  },
  {
    path: '', component: HomePageComponent
  },
  {
    path: 'successpage', component: SuccesspageComponent
  }
  ];

@NgModule({
  declarations: [
    AppComponent,
    SuccessStoryComponent,
    FooterComponent,
    CarouselComponent,
    WhyusComponent,
    CoursesComponent,
    HomePageComponent,
    SuccesspageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
