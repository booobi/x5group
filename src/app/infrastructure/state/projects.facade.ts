import { Observable } from "rxjs";
import { take } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";

import { environment } from '../../../environments/environment';

import { Project, ProjectsResponse } from "../types/project";
import { defaultProjectsState, ProjectsState } from "./projects.state";
import { Injectable } from "@angular/core";
import { Store } from '../store';
import { BaseFacade } from "../resetable.facade";

@Injectable({ providedIn: "root" })
export class ProjectsFacade extends BaseFacade<ProjectsState> {
	endpoint = `${environment.BACKEND_BASE_URL}/projects`;

	isLoading$: Observable<boolean> = this.store.select(
		(state) => state.isLoading
	);

	projects$: Observable<Project[]> = this.store.select(
		(state) => state.projects
	);

	constructor(private http: HttpClient) {
        super(new Store(defaultProjectsState));
    }

	getProjects() {
		this.store.patchState({ isLoading: true });
		this.http
			.get<ProjectsResponse>(this.endpoint)
			.pipe(take(1))
			.subscribe((response: ProjectsResponse) =>
				this.store.patchState({ isLoading: false, projects: response.items })
			);
	}
}
