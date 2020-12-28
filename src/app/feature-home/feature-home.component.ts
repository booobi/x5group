import { ChangeDetectionStrategy, Component } from "@angular/core";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

@Component({
	selector: "feature-home",
	templateUrl: "./feature-home.component.html",
	styleUrls: ["./feature-home.component.scss"],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureHomeComponent {
	readonly faArrowRight = faArrowRight;
}
