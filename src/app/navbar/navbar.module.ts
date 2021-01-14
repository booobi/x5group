import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { NavbarComponent } from './navbar.component';

@NgModule({
	declarations: [NavbarComponent],
	imports: [
        CommonModule,
        RouterModule,
        FontAwesomeModule,
        MatTabsModule,
	],
	exports: [NavbarComponent],
})
export class NavbarModule {}
