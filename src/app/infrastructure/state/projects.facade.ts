import { Observable, zip } from "rxjs";
import { map, switchMap, tap } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { TransferStateService } from "@scullyio/ng-lib";

import { environment } from "../../../environments/environment";

import { Project, ProjectsResponse } from "../types/project";
import { defaultProjectsState, ProjectsState } from "./projects.state";
import { Injectable } from "@angular/core";
import { Store } from "../store";
import { BaseFacade } from "../resetable.facade";
import { DomSanitizer } from "@angular/platform-browser";

@Injectable({ providedIn: "root" })
export class ProjectsFacade extends BaseFacade<ProjectsState> {
	endpoint = `${environment.BACKEND_BASE_URL}/projects`;

	isLoading$: Observable<boolean> = this.store.select(
		(state) => state.isLoading
	);

	projects$: Observable<Project[]> = this.store.select(
		(state) => state.projects
	);

	constructor(
		private http: HttpClient,
		private sanitizer: DomSanitizer,
		private transferState: TransferStateService
	) {
		super(new Store(defaultProjectsState));
	}

	getProjects() {
		this.store.patchState({ isLoading: true });
		this.transferState
			.useScullyTransferState(
				"projects",
				this.http.get<ProjectsResponse>(this.endpoint)
			)
			.subscribe(({ items }) =>
				this.store.patchState({ isLoading: false, projects: items })
			);
	}
}
