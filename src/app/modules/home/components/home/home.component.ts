import { Component, OnInit } from '@angular/core';
import Post from 'src/app/data/models/Post';
import { PostService } from 'src/app/data/services/post.service';
import Response from 'src/app/data/models/Response';
import { Title } from '@angular/platform-browser';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: [ './home.component.css' ]
})
export class HomeComponent implements OnInit {
	public posts: Post[];

  constructor(private postService: PostService, private titleService: Title) {
    this.titleService.setTitle(`Comunidade Links`);
  }

	ngOnInit(): void {
    this.getPosts();
  }

  public getPosts() {
    this.postService.index().subscribe((response: Response) => {
      this.posts = response.data.docs;
    });
  }

}
