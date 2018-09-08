import { Component } from '@angular/core';
import { slider1 } from './helper/slider';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public slider = slider1;
  constructor( ) {
    this.sliderTime(this.slider);
  }
  sliderTime(...array ) {
     setInterval(() => {
      //array =  array.push(array[0]);
       //array.unshift();
       console.log(array);
     }, 8000);
  }
}
