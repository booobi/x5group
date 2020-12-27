
import { Observable } from 'rxjs';
import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from "@angular/core";

import { ProjectsFacade } from "../infrastructure/state/projects.facade";
import { Project } from "../infrastructure/types/project";
import { projectsAnimations } from './projects.animations';
import { Router } from '@angular/router';

@Component({
	selector: "app-projects",
	templateUrl: "./projects.component.html",
	styleUrls: ["./projects.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: projectsAnimations,
})
export class ProjectsComponent implements OnInit, OnDestroy {
    projects$ = this.projectsFacade.projects$;
    
    isLoading = this.projectsFacade.isLoading$;
	
    constructor(private router: Router, private projectsFacade: ProjectsFacade) {}
    
    onProjectNavigate(projectId: string) {
        this.router.navigate(['projects', projectId], {});
    }

	ngOnInit() {
		this.projectsFacade.getProjects();
    }
    
    ngOnDestroy() {
        this.projectsFacade.patchToInitial();
    }
}
