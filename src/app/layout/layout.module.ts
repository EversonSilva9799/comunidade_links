import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { LayoutComponent } from './components/layout/layout.component';
import { RouterModule } from '@angular/router';
import { SearchComponent } from '../shared/components/search/search.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
	declarations: [ MenuComponent, FooterComponent, LayoutComponent ],
	imports: [ CommonModule, RouterModule, SharedModule ]
})
export class LayoutModule {}
