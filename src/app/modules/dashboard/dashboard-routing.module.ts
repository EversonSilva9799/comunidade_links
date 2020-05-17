import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginModule } from './login/login.module';


const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', loadChildren: () => LoginModule },
      { path: 'home', component: HomeComponent }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
