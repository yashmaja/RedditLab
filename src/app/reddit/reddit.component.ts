import { Component, OnInit } from '@angular/core';
import { BlogResult } from '../posts';
import { RedditService } from '../reddit.service';

@Component({
  selector: 'app-reddit',
  templateUrl: './reddit.component.html',
  styleUrls: ['./reddit.component.css']
})
export class RedditComponent implements OnInit {

  constructor(private redditApiService : RedditService) { }

  result : BlogResult = {
    kind : "",
    data : {
      after:      "",
      dist:       0,
      modhash:    "",
      geo_filter: null,
      children:   [],
      before:     null
    }
  }

  ngOnInit(): void {
    this.redditApiService.getPosts().subscribe((response : any) => {
      console.log(response);
      // this.result.kind = response.kind;
      // this.result.data.dist = response.dist;
      // this.result.data.modhash = response.modhash;
      // this.result.data.children.kind = response.data.children.kind;
      // this.result.data.children.data = response.data.children.data;
      this.result = response;
      console.log(this.result.data.children)
    })
  }

}
