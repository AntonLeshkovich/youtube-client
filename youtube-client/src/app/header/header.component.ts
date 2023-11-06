import { Component } from '@angular/core';

import { YoutubeService } from '../services/youtube.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  searchQuery = '';
  constructor(private youtubeService: YoutubeService) {}
  search() {
    this.youtubeService.searchVideos(this.searchQuery).subscribe((result) => {
      console.log(result);
    });
  }
}
