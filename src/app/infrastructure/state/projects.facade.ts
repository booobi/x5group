import { BehaviorSubject } from "rxjs";
import { map, take } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";

import { ProjectsResponse } from "../types/project";
import { defaultProjectsState, ProjectsState } from "./projects.state";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class ProjectsFacade {
	endpoint =
		"https://8tvr6gt5p1.execute-api.us-east-2.amazonaws.com/dev/projects";

	private _state$ = new BehaviorSubject<ProjectsState>(defaultProjectsState);

	state$ = this._state$.asObservable();

	isLoading$ = this.state$.pipe(map((state) => state.isLoading));

	projects$ = this.state$.pipe(map((state) => state.projects));

	constructor(private http: HttpClient) {}

	getProjects() {
		this._state$.next({ isLoading: true, projects: [] });
		this.http
			.get<ProjectsResponse>(this.endpoint)
			.pipe(take(1))

			.subscribe((response: ProjectsResponse) =>
				this._state$.next({ isLoading: false, projects: response.projects })
			);
	}
}
