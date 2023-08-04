import { Component } from '@angular/core';
import { Song } from 'src/app/models/song.model';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss']
})
export class ExploreComponent {

  songList: Song[] = [
    {
      title: 'ABC',
      artist: 'SINGER',
      album: 'SONGS',
      year: 2023,
      genre: 'ROCK',
      albumCoverImage: 'assets/images/dark-side-moon.svg',
      songDuration: '3:10'
    },
    {
      title: 'ABC',
      artist: 'SINGER',
      album: 'SONGS',
      year: 2023,
      genre: 'ROCK',
      albumCoverImage: 'assets/images/dark-side-moon.svg',
      songDuration: '3:10'
    },
    {
      title: 'ABC',
      artist: 'SINGER',
      album: 'SONGS',
      year: 2023,
      genre: 'ROCK',
      albumCoverImage: 'assets/images/dark-side-moon.svg',
      songDuration: '3:10'
    }
  ];

}
