import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginModule } from './login/login.module';
import { PostModule } from './post/post.module'


const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', loadChildren: () => LoginModule },
      { path: 'posts', loadChildren: () => PostModule },
      { path: 'home', component: HomeComponent }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
