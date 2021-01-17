import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import {
	faBuilding,
	faCity,
	faShoppingCart,
	faIdCardAlt,
	IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import { filter, map } from 'rxjs/operators';

interface TabConfig {
	url: string;
	displayName: string;
	faIcon: IconDefinition;
}

const tabsConfig: TabConfig[] = [
	{
		url: "home",
		displayName: "Начало",
		faIcon: faBuilding,
	},
	{
		url: "projects",
		displayName: "Обекти",
		faIcon: faCity,
	},
	{
		url: "sales",
		displayName: "Продажби",
		faIcon: faShoppingCart,
	},
	{
		url: "contact",
		displayName: "Контакти",
		faIcon: faIdCardAlt,
	},
];

@Component({
	selector: "app-navbar",
	templateUrl: "./navbar.component.html",
	styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent {
	// icons
	faCity = faCity;
	faBuilding = faBuilding;
	faShoppingCart = faShoppingCart;
	faIdCardAlt = faIdCardAlt;

	// tabs
	readonly tabsConfig = tabsConfig;

	activeFragment$ = this.router.events.pipe(
		filter((event) => event instanceof NavigationEnd),
		map((event: any) => event.url.replace('/', ''))
	);
	constructor(public router: Router, public route: ActivatedRoute) {}

	isActive(url: string) {
		return this.router.isActive(url, true);
	}
}
