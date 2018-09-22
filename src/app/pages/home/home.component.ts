import { Component, OnInit } from '@angular/core';
import { POPULAR_TAGS, SLIDER } from '../../helper/slider';
import { LATEST_POST, POSTS } from '../../helper/posts';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public slider = SLIDER;
  public posts = POSTS;
  public latestPost = LATEST_POST;
  public popularTags = POPULAR_TAGS;
  constructor( ) {
    this.sliderTime(this.slider);
  }
  sliderTime(array ) {
    setInterval(() => {
      array.push(array[0]);
      array.shift();
    }, 5000);
  }

  ngOnInit() {}
}
