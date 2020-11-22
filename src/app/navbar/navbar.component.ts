import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import {
	faBuilding,
	faCity,
	faShoppingCart,
	faIdCardAlt,
	IconDefinition,
} from "@fortawesome/free-solid-svg-icons";

interface TabConfig {
	route: string;
	displayName: string;
	faIcon: IconDefinition;
}

const tabsConfig: TabConfig[] = [
	{
		route: "/home",
		displayName: "Начало",
		faIcon: faCity,
	},
	{
		route: "/projects",
		displayName: "Obekti",
		faIcon: faCity,
	},
	{
		route: "/buildings",
		displayName: "Apartament",
		faIcon: faBuilding,
	},
	{
		route: "/shopping",
		displayName: "Prodajbi",
		faIcon: faShoppingCart,
	},
	{
		route: "contacts",
		displayName: "kontakti",
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

	constructor(public router: Router) {}

	isActive(url: string) {
		return this.router.isActive(url, true);
	}
}
