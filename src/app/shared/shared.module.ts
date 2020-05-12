import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './components/search/search.component';
import { BannerComponent } from './components/banner/banner.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RouterModule } from '@angular/router';

@NgModule({
	declarations: [ SearchComponent, BannerComponent, NotFoundComponent ],
  imports: [CommonModule, FormsModule, RouterModule ],
	exports: [ SearchComponent, BannerComponent, NotFoundComponent ]
})
export class SharedModule {}
