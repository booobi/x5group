
import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { map } from "rxjs/operators";
import { environment } from "src/environments/environment";

import { ProjectsFacade } from "../infrastructure/state/projects.facade";
import { projectsAnimations } from './feature-projects.animations';

@Component({
	selector: "feature-projects",
	templateUrl: "./feature-projects.component.html",
	styleUrls: ["./feature-projects.component.scss"],
	changeDetection: ChangeDetectionStrategy.OnPush,
	animations: projectsAnimations,
})
export class FeatureProjectsComponent implements OnInit, OnDestroy {
	projects$ = this.projectsFacade.projects$.pipe(
		map((projects) =>
			projects.map((project) => ({
				...project,
				thumbnailUrl: `${environment.PROJECTS_IMAGES_URL}${project.projectId}/thumbnail.jpg`,
			}))
		)
	);

	isLoading$ = this.projectsFacade.isLoading$;

	constructor(private router: Router, private projectsFacade: ProjectsFacade) {}

	onProjectNavigate(projectId: string) {
		this.router.navigate(["projects", projectId]);
	}

	ngOnInit() {
		this.projectsFacade.getProjects();
	}

	ngOnDestroy() {
		this.projectsFacade.reset();
	}
}
