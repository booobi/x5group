import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { NavbarComponent } from './navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';

@NgModule({
	declarations: [NavbarComponent],
	imports: [
        CommonModule,
        RouterModule,
		MatToolbarModule,
		MatTabsModule,
		FontAwesomeModule,
	],
	exports: [NavbarComponent],
})
export class NavbarModule {}
