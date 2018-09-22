import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutMeComponent} from './pages/about-me/about-me.component';
import {HomeComponent} from './pages/home/home.component';
import {CategoriesComponent} from './pages/categories/categories.component';
import {ContactComponent} from './pages/contact/contact.component';
import {PageComponent} from './pages/page/page.component';
import {TravelComponent} from './pages/travel/travel.component';
import {ArchiveBlogComponent} from './pages/archive-blog/archive-blog.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about-us',
    component: AboutMeComponent
  },
  {
    path: 'categories',
    component: CategoriesComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'pages',
    component: PageComponent
  },
  {
    path: 'travel',
    component: TravelComponent
  },
  {
    path: 'archive-blog',
    component: ArchiveBlogComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
