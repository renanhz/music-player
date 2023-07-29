import { Component } from '@angular/core';
import { faTrophy, faMagnifyingGlass, faHeart, faList } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
  faTrophy = faTrophy;
  faMagnifyingGlass = faMagnifyingGlass;
  faHeart = faHeart;
  faList = faList;
}
