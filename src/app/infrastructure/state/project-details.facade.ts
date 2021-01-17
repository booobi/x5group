import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { TransferStateService } from "@scullyio/ng-lib";

import { environment } from '../../../environments/environment';
import { Store } from '../store';
import { defaultProjectDetailsState, ProjectDetails, ProjectDetailsState } from "./project-details.state";
import { BaseFacade } from "../resetable.facade";

@Injectable({ providedIn: "root" })
export class ProjectDetailsFacade extends BaseFacade<ProjectDetailsState> {
	base_endpoint = `${environment.BACKEND_BASE_URL}/projects`;

	isLoading$: Observable<boolean> = this.store.select(state => state.isLoading);

    projectDetails$: Observable<ProjectDetails> = this.store.select(state => state.projectDetails);
    
	constructor(private http: HttpClient, private transferState: TransferStateService) {
        super(new Store(defaultProjectDetailsState));
    }

	getProject(projectId: string) {
		this.store.patchState({ isLoading: true });
		this.transferState.useScullyTransferState(projectId, this.http.get<ProjectDetails>(`${this.base_endpoint}/${projectId}`))
			.subscribe((response: ProjectDetails) =>
				this.store.patchState({ isLoading: false, projectDetails: response })
			);
	}
}
