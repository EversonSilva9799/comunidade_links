import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './components/home/home.component';
import { LoginModule } from './login/login.module';
import { PostModule } from './post/post.module';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    LoginModule,
    PostModule
  ]
})
export class DashboardModule { }
