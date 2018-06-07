import { Component } from '@angular/core';
import { CarouselComponent } from './components/carousel/carousel.component';
import { WhyusComponent } from './components/whyus/whyus.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  ngAfterViewChecked() {
    window.scrollTo({
    top: 0, 
    left: 0, 
    behavior: 'smooth' 
    });
  }
}
