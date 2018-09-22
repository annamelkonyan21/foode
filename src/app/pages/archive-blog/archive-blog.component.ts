import { Component, OnInit } from '@angular/core';
import {LATEST_POST, POSTS} from '../../helper/posts';
import { CATEGORIES } from '../../helper/categories';
import {POPULAR_TAGS} from '../../helper/slider';

@Component({
  selector: 'app-archive-blog',
  templateUrl: './archive-blog.component.html',
  styleUrls: ['./archive-blog.component.scss']
})
export class ArchiveBlogComponent implements OnInit {

  public posts = POSTS;
  public categories = CATEGORIES;
  public latestPost = LATEST_POST;
  public archives = ['January 2018', ' February 2018', ' March 2018', 'April 2018', 'May 2018'];
  public popularTags = POPULAR_TAGS;
  constructor() { }

  ngOnInit() {
  }

}
