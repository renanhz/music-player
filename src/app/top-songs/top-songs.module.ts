import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopSongsComponent } from './top-songs/top-songs.component';



@NgModule({
  declarations: [
    TopSongsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TopSongsComponent
  ]
})
export class TopSongsModule { }
