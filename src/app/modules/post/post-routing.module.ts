import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsDetailComponent } from './components/posts-detail/posts-detail.component';
import { NotFoundComponent } from 'src/app/shared/components/not-found/not-found.component';
import { ListComponent } from './components/list/list.component';

const routes: Routes = [
	{ path: 'posts', component: ListComponent },
	{ path: 'posts/:link', component: PostsDetailComponent },
	{ path: '**', component: NotFoundComponent }
];

@NgModule({
	imports: [ RouterModule.forChild(routes) ],
	exports: [ RouterModule ]
})
export class PostRoutingModule {}
