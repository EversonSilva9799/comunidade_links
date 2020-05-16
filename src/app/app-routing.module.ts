import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { LayoutComponent } from './layout/components/layout/layout.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { LayoutDashboardComponent } from './layout/components/layout-dashboard/layout-dashboard.component';
import { HomeModule } from './modules/home/home.module';
import { PostModule } from './modules/post/post.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';

const routes: Routes = [
  {
    path: 'dashboard',
    component: LayoutDashboardComponent,
    children: [
      {
        path: '',
        loadChildren: () => DashboardModule
      }
    ]
  },
	{
		path: '',
		component: LayoutComponent,
		children: [
			{
				path: '',
				loadChildren: () => HomeModule
			},
			{
				path: 'posts',
				loadChildren: () => PostModule
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
