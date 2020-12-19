import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { ChoresListComponent } from './chores-list/chores-list.component';
import { FavPhotosComponent } from './fav-photos/fav-photos.component';
import { PageTitleComponent } from './page-title/page-title.component';
<<<<<<< HEAD
=======
import { FavLinksComponent } from './fav-links/fav-links.component';
>>>>>>> 55a711e8b0c745bf0a5cbc14e7532603a74a4a7a

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    ChoresListComponent,
    FavPhotosComponent,
<<<<<<< HEAD
    PageTitleComponent
=======
    PageTitleComponent,
    FavLinksComponent
>>>>>>> 55a711e8b0c745bf0a5cbc14e7532603a74a4a7a
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
