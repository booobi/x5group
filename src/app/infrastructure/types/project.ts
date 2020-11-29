export enum ProjectStatus {
	IN_PROGRESS = "IN_PROGRESS",
	COMPLETE = "COMPLETE",
}

export interface Project {
	name: string;
	thumbnailUrl: string;
	projectName?: string;
	buildCompanyName: string;
	dueDate: string;
	status: ProjectStatus;
	stage: string;
}

export interface ProjectsResponse {
	items: Project[];
}
