import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  public nav: string = 'home';
  constructor() { }

  ngOnInit() {
  }

  setNav(nav) {
    this.nav = nav;
    console.log(this.nav)
  }

}
