import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Post from 'src/app/data/models/Post';
import { PostService } from 'src/app/data/services/post.service';

@Component({
	selector: 'app-posts-detail',
	templateUrl: './posts-detail.component.html',
	styleUrls: [ './posts-detail.component.css' ]
})
export class PostsDetailComponent implements OnInit {
	public post: Post;
	public link: string;

	constructor(private route: ActivatedRoute, private postService: PostService) {}

	ngOnInit(): void {
		this.route.params.subscribe(({ link }) => (this.link = link));
		this.getPost();
	}

	public getPost(): void {
		this.post = this.postService.getPost();
	}
}
