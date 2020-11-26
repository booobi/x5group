import { Project } from '../types/project';

export interface ProjectsState {
    isLoading: boolean;
    projects: Project[];
}

export const defaultProjectsState: ProjectsState = {
    isLoading: false,
    projects: [],
}