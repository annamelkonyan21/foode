import { Component } from '@angular/core';
import { SLIDER, POSTS , LATEST_POST, POPULAR_TAGS} from './helper/slider';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public slider = SLIDER;
  public posts = POSTS;
  public latestPost = LATEST_POST;
  public popularTags = POPULAR_TAGS;
  public thisYear = Date.now()
  constructor( ) {
    console.log(this.thisYear)
    this.sliderTime(this.slider);
  }
  sliderTime(array ) {
     setInterval(() => {
        array.push(array[0]);
        array.shift();
     }, 5000);
  }
}
