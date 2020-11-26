import { ChangeDetectionStrategy, Component } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

@Component({
	selector: "app-home",
	templateUrl: "./home.component.html",
	styleUrls: ["./home.component.scss"],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
	readonly faArrowRight = faArrowRight;

	constructor(private http: HttpClient) {}

	test$ = this.http.get('https://8tvr6gt5p1.execute-api.us-east-2.amazonaws.com/dev/projects');
}
