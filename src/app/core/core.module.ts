import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinkModule } from '../modules/link/link.module';
import { HomeModule } from '../modules/home/home.module';
import { PostModule } from '../modules/post/post.module';
import { DashboardModule } from '../modules/dashboard/dashboard.module';

@NgModule({
	declarations: [],
	imports: [ CommonModule, HomeModule, LinkModule, PostModule, DashboardModule]
})
export class CoreModule {}
