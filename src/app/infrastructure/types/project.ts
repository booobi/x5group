export interface Project {
	name: string;
	subtitle?: string;
	thumbnailUrl: string;
	description: string;
}

export interface ProjectsResponse {
	projects: Project[];
}