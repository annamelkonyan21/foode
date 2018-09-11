import { Component } from '@angular/core';
import { SLIDER, POSTS , LATEST_POST} from './helper/slider';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public slider = SLIDER;
  public posts = POSTS;
  public latestPost = LATEST_POST;
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
