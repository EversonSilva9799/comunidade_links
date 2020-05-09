import { Component, OnInit } from '@angular/core';
import Post from 'src/app/data/models/Post';
import { PostService } from 'src/app/data/services/post.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: [ './home.component.css' ]
})
export class HomeComponent implements OnInit {
	public posts: Post[];

	constructor(private postService: PostService) {}

	ngOnInit(): void {
		this.getLinks();
	}

	public getLinks() {
		this.posts = this.postService.getLinks();
	}
}
