import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { LayoutComponent } from './components/layout/layout.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { LayoutDashboardComponent } from './components/layout-dashboard/layout-dashboard.component';

@NgModule({
	declarations: [ MenuComponent, FooterComponent, LayoutComponent, LayoutDashboardComponent ],
	imports: [ CommonModule, RouterModule, SharedModule ]
})
export class LayoutModule {}
