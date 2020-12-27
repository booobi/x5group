import { take } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";

import { Project, ProjectsResponse } from "../types/project";
import { defaultProjectsState, ProjectsState } from "./projects.state";
import { Injectable } from "@angular/core";
import { Store } from '../store';
import { Observable } from "rxjs";

@Injectable({ providedIn: "root" })
export class ProjectsFacade {
	endpoint =
        "https://8tvr6gt5p1.execute-api.us-east-2.amazonaws.com/dev/projects";
    
    store: Store<ProjectsState> = new Store(defaultProjectsState);

	isLoading$: Observable<boolean> = this.store.select(state => state.isLoading);

	projects$: Observable<Project[]> = this.store.select((state) => state.projects);

	constructor(private http: HttpClient) {}

	getProjects() {
        this.store.patchState({ isLoading: true });
		this.http
			.get<ProjectsResponse>(this.endpoint)
			.pipe(take(1))

			.subscribe((response: ProjectsResponse) =>
				this.store.patchState({ isLoading: false, projects: response.items })
			);
    }

    patchToInitial() {
        this.store.patchToInitial();
    }
}
