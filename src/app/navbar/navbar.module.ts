import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { NavbarComponent } from './navbar.component';

@NgModule({
	declarations: [NavbarComponent],
	imports: [
        CommonModule,
        RouterModule,
		FontAwesomeModule,
		NgbNavModule,
	],
	exports: [NavbarComponent],
})
export class NavbarModule {}
