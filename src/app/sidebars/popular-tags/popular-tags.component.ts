import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-popular-tags',
  templateUrl: './popular-tags.component.html',
  styleUrls: ['./popular-tags.component.scss']
})
export class PopularTagsComponent implements OnInit {
  @Input('popularTags') popularTags;
  constructor() { }

  ngOnInit() {
  }

}
