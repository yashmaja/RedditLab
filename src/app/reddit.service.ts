import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RedditService {

  constructor(private http: HttpClient) { }

  apiUrl : string = 'https://www.reddit.com/r/aww/.json';

  getPosts() : any {
    return this.http.get(this.apiUrl);
  }
}
