import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
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
      },
		],
  },

	{ path: '**', component: NotFoundComponent }
];

const routerOptions: ExtraOptions = {
  useHash: true,
  onSameUrlNavigation: 'reload',
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64],
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
