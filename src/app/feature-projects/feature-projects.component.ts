
import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from "@angular/core";

import { ProjectsFacade } from "../infrastructure/state/projects.facade";
import { projectsAnimations } from './feature-projects.animations';
import { Router } from '@angular/router';

@Component({
	selector: "feature-projects",
	templateUrl: "./feature-projects.component.html",
	styleUrls: ["./feature-projects.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: projectsAnimations,
})
export class FeatureProjectsComponent implements OnInit, OnDestroy {
    projects$ = this.projectsFacade.projects$;
    
    isLoading$ = this.projectsFacade.isLoading$;

    constructor(private router: Router, private projectsFacade: ProjectsFacade) {}
    
    onProjectNavigate(projectId: string) {
        this.router.navigate(['projects', projectId]);
    }

	ngOnInit() {
		this.projectsFacade.getProjects();
    }
    
    ngOnDestroy() {
        this.projectsFacade.reset();
    }
}
