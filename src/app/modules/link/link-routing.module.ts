import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LinkComponent } from './components/link/link.component';

const routes: Routes = [
	{
		path: '',
		children: [ { path: '', component: LinkComponent } ]
	}
];

@NgModule({
	imports: [ RouterModule.forChild(routes) ],
	exports: [ RouterModule ]
})
export class LinkRoutingModule {}
