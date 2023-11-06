import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  private API_KEY = 'AIzaSyDEwelbg6FtB2g7OSJVmwONM3KOMAfre68';
  private API_URL = 'https://www.googleapis.com/youtube/v3/search';

  constructor(private http: HttpClient) { }

  searchVideos(query: string) {
    const params = {
      key: this.API_KEY,
      q: query,
      part: 'snippet',
      type: 'video'
    };

    return this.http.get(this.API_URL, { params });
  }
}
