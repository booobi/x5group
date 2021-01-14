import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { routeContainerSelector, RouteContainerSelectorToken } from "./providers";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app.routing.module";
import { NavbarModule } from './navbar/navbar.module';

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		NavbarModule,
		AppRoutingModule,
	],
	providers: [
		{ provide: RouteContainerSelectorToken, useValue: routeContainerSelector },
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
