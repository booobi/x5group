import { Component } from '@angular/core';
import { environment } from '../environments/environment';
import { faBuilding, faCity, faShoppingCart, faIdCardAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    // icons
    faCity = faCity;
    faBuilding = faBuilding;
    faShoppingCart = faShoppingCart;
    faIdCardAlt = faIdCardAlt;
}
