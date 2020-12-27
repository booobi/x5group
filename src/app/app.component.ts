import {
	ChangeDetectionStrategy,
	Component,
	ElementRef,
	OnInit,
	ViewChild,
} from "@angular/core";
import { Router } from "@angular/router";
import { ProjectsFacade } from './infrastructure/state/projects.facade';

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.scss"],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
	@ViewChild("navbar", { read: ElementRef, static: true })
	navbarEl: ElementRef;
    
    constructor(private router: Router) {}

	get routeViewSize() {
		return `calc(100% - ${this.navbarEl.nativeElement.offsetHeight}px)`;
    }
    
    ngOnInit() {
        this.router.events.subscribe(console.log);
    }
}
