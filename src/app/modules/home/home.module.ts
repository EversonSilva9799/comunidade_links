import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { PostModule } from '../post/post.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
	declarations: [ HomeComponent ],
	imports: [ CommonModule, HomeRoutingModule, PostModule, SharedModule ]
})
export class HomeModule {}
