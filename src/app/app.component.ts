import {
	ChangeDetectionStrategy,
	Component,
	ElementRef,
	ViewChild,
} from "@angular/core";
import { Router } from "@angular/router";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.scss"],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
	@ViewChild("navbar", { read: ElementRef, static: true })
	navbarEl: ElementRef;

	get routeViewSize() {
		return `calc(100% - ${this.navbarEl.nativeElement.offsetHeight}px)`;
	}
}
