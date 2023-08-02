import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SongCardComponent } from './components/song-card/song-card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    SongCardComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    SongCardComponent
  ]
})
export class SharedModule { }
