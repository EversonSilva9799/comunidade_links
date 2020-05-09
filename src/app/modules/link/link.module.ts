import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinkRoutingModule } from './link-routing.module';
import { LinkComponent } from './components/link/link.component';

@NgModule({
	declarations: [LinkComponent],
	imports: [ CommonModule, LinkRoutingModule ]
})
export class LinkModule {}
