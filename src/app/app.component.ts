import { ChangeDetectionStrategy, Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

import { faBuilding, faCity, faShoppingCart, faIdCardAlt, IconDefinition } from '@fortawesome/free-solid-svg-icons';

interface TabConfig {
    route: string;
    displayName: string;
    faIcon: IconDefinition;
}

const tabsConfig: TabConfig[] = [{
    route: '/home',
    displayName: 'Начало',
    faIcon: faCity,
}, {
    route: '/projects',
    displayName: 'Obekti',
    faIcon: faCity,
}, {
    route: '/buildings',
    displayName: 'Apartament',
    faIcon: faBuilding,
}, {
    route: '/shopping',
    displayName: 'Prodajbi',
    faIcon: faShoppingCart,
}, {
    route: 'contacts',
    displayName: 'kontakti',
    faIcon: faIdCardAlt,
}]

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
    // icons
    faCity = faCity;
    faBuilding = faBuilding;
    faShoppingCart = faShoppingCart;
    faIdCardAlt = faIdCardAlt;

    // tabs
    readonly tabsConfig = tabsConfig;

    @ViewChild('toolbar', { read: ElementRef, static: true }) toolbarEl: ElementRef;

    get routeViewSize() {
        return `calc(100% - ${this.toolbarEl.nativeElement.offsetHeight}px)`;
    }
    
    constructor(public router: Router) {
    }

    isActiveRoute(url: string) {
        return this.router.isActive(url, true);
    }

    ngDoCheck() {
        console.log('CD on main');
    }
}
