import { Component, OnInit, Input } from '@angular/core';
import Post from 'src/app/data/models/Post';

@Component({
	selector: 'app-posts',
	templateUrl: './posts.component.html',
	styleUrls: [ './posts.component.css' ]
})
export class PostsComponent implements OnInit {
	@Input() label: string;
	@Input() posts: Post[];

	constructor() {}

	ngOnInit(): void {}
}
