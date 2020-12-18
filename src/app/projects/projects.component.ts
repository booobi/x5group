
import { Observable } from 'rxjs';
import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";

import { ProjectsFacade } from "../infrastructure/state/projects.facade";
import { Project } from "../infrastructure/types/project";

@Component({
	selector: "app-projects",
	templateUrl: "./projects.component.html",
	styleUrls: ["./projects.component.scss"],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsComponent implements OnInit {
	projects$: Observable<Project[]> = this.projectsFacade.projects$;
	
	constructor(private projectsFacade: ProjectsFacade) {}

	ngOnInit() {
		this.projectsFacade.getProjects();
	}
}
