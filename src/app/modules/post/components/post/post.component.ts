import { Component, OnInit, Input } from '@angular/core';
import Post from 'src/app/data/models/Post';
import { ApiService } from 'src/app/data/services/api.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-post',
	templateUrl: './post.component.html',
	styleUrls: [ './post.component.css' ]
})
export class PostComponent implements OnInit {
	@Input() post: Post;

	constructor(public apiService: ApiService, private router: Router) {}

  ngOnInit(): void {}

  public redirect(link: string) {
    this.router.navigate([`/posts${link}`]);
  }
}
