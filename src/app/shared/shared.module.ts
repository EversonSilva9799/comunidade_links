import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './components/search/search.component';
import { BannerComponent } from './components/banner/banner.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
	declarations: [ SearchComponent, BannerComponent, NotFoundComponent ],
	imports: [ CommonModule ],
	exports: [ SearchComponent, BannerComponent, NotFoundComponent ]
})
export class SharedModule {}
