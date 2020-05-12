import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Post from 'src/app/data/models/Post';
import { PostService } from 'src/app/data/services/post.service';
import Response from 'src/app/data/models/Response';
import { ApiService } from 'src/app/data/services/api.service';
import { Title } from '@angular/platform-browser';

@Component({
	selector: 'app-posts-detail',
	templateUrl: './posts-detail.component.html',
	styleUrls: [ './posts-detail.component.css' ]
})
export class PostsDetailComponent implements OnInit {
	public post: Post = new Post();
	public link: string;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    public apiService: ApiService,
    private titleService: Title) {}

	ngOnInit(): void {
		this.route.params.subscribe(({ link }) =>{
      this.link = link;
      this.get();
    });

	}

	public get(): void {
		this.postService.get(this.link).subscribe((response: Response) => {
      this.post = response.data;
      this.titleService.setTitle(`${this.post.title} | Comunidade Links`);
    });
	}
}
