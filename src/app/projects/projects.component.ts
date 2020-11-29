
import { Observable } from 'rxjs';
import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { ProjectsFacade } from "../infrastructure/state/projects.facade";

import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { Project } from "../infrastructure/types/project";
import { projecStatusDisplayNamesMap } from './projects.config';

@Component({
	selector: "app-projects",
	templateUrl: "./projects.component.html",
	styleUrls: ["./projects.component.scss"],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsComponent implements OnInit {
	readonly projecStatusDisplayNamesMap = projecStatusDisplayNamesMap;
	readonly faFacebookSquare = faFacebookSquare;

	projects$: Observable<Project[]> = this.projectsFacade.projects$;
	
	constructor(private projectsFacade: ProjectsFacade) {}

	ngOnInit() {
		this.projectsFacade.getProjects();
	}


	// projects: Project[] = new Array(9).fill(null).map((_) => ({
	// 	name: 'Сграда 1, комплекс "Магнолия"',
	// 	thumbnailUrl:
	// 		"https://scontent.fsof9-1.fna.fbcdn.net/v/t31.0-8/11703421_469350523266897_617694295842842594_o.jpg?_nc_cat=103&ccb=2&_nc_sid=e007fa&_nc_ohc=7dtOPo5PRyQAX-GYKlC&_nc_ht=scontent.fsof9-1.fna&oh=75c73d22e6048e7c07747f03b49a3b92&oe=5FD58E1C",
	// 	buildCompanyName: "testera",
	// 	projectName: "testera",
	// 	dueDate: "12-12-2020",
	// 	status: "test",
	// }));
}
