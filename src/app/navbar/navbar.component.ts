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
import { filter, map, startWith, tap } from 'rxjs/operators';

interface TabConfig {
	url: string;
	displayName: string;
	faIcon: IconDefinition;
}

const tabsConfig: TabConfig[] = [
	{
		url: "home",
		displayName: "Начало",
		faIcon: faCity,
	},
	{
		url: "projects",
		displayName: "Обекти",
		faIcon: faCity,
	},
	{
		url: "buildings",
		displayName: "Апратаменти",
		faIcon: faBuilding,
	},
	{
		url: "shopping",
		displayName: "Продажби",
		faIcon: faShoppingCart,
	},
	{
		url: "contacts",
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
		map((event: any) => event.url.replace('/', '')),
		tap(console.log)
	);
	constructor(public router: Router, public route: ActivatedRoute) {}

	isActive(url: string) {
		return this.router.isActive(url, true);
	}
}
