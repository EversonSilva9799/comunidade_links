import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostsComponent } from './components/posts/posts.component';
import { PostsDetailComponent } from './components/posts-detail/posts-detail.component';
import { ListComponent } from './components/list/list.component';
import { PostComponent } from './components/post/post.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
	declarations: [ PostsComponent, PostsDetailComponent, ListComponent, PostComponent ],
	imports: [ CommonModule, PostRoutingModule, SharedModule ],
	exports: [ PostsComponent ]
})
export class PostModule {}
