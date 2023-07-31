import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ExploreModule } from './explore/explore.module';
import { TopSongsModule } from './top-songs/top-songs.module';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ExploreModule,
    TopSongsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
