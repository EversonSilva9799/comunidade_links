import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/components/layout/layout.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';

const routes: Routes = [
	{
		path: '',
		component: LayoutComponent,

		children: [
			{
				path: '',
				loadChildren: './modules/home/home.module#HomeModule'
			},
			{
				path: 'posts',
				loadChildren: './modules/post/post.module#PostModule'
			}
		]
	},
	{ path: '**', component: NotFoundComponent }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes, { useHash: true }) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
