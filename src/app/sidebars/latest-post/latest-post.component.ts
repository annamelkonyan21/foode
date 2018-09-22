import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-latest-post',
  templateUrl: './latest-post.component.html',
  styleUrls: ['./latest-post.component.scss']
})
export class LatestPostComponent implements OnInit {
  @Input('latestPost') latestPost;
  constructor() { }

  ngOnInit() {
  }

}
