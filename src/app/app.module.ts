import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './sidebars/menu/menu.component';
import { FooterComponent } from './sidebars/footer/footer.component';
import { FollowUsOnInstagramComponent } from './sidebars/follow-us-on-instagram/follow-us-on-instagram.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { HomeComponent } from './pages/home/home.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { TravelComponent } from './pages/travel/travel.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PageComponent } from './pages/page/page.component';
import { SoshialMediaComponent } from './sidebars/soshial-media/soshial-media.component';
import { ArchiveBlogComponent } from './pages/archive-blog/archive-blog.component';
import { PostCardComponent } from './sidebars/post-card/post-card.component';
import { LatestPostComponent } from './sidebars/latest-post/latest-post.component';
import { PopularTagsComponent } from './sidebars/popular-tags/popular-tags.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    FollowUsOnInstagramComponent,
    AboutMeComponent,
    HomeComponent,
    CategoriesComponent,
    TravelComponent,
    ContactComponent,
    PageComponent,
    SoshialMediaComponent,
    ArchiveBlogComponent,
    PostCardComponent,
    LatestPostComponent,
    PopularTagsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
