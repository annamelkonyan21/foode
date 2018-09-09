import { Component } from '@angular/core';
import { slider1, POSTS } from './helper/slider';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public slider = slider1;
  public posts = POSTS;
  constructor( ) {
    this.sliderTime(this.slider);
  }
  sliderTime(array ) {
     setInterval(() => {
        array.push(array[0]);
        array.shift();
     }, 5000);
  }
}
