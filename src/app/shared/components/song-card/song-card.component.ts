import { Component, Input } from '@angular/core';
import { Song } from 'src/app/models/song.model';
import { faHeart, faBookmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-song-card',
  templateUrl: './song-card.component.html',
  styleUrls: ['./song-card.component.scss']
})
export class SongCardComponent {
  faHeart = faHeart;
  faBookmark = faBookmark;

  @Input() songData: Song = {};
}
