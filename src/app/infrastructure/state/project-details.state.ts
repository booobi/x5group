export interface ProjectDetails { 
    thumbnailUrl: string;
    description: string;
    galleryImageUrls: string[];
}
export interface ProjectDetailsState {
    isLoading: boolean;
    projectDetails: Partial<ProjectDetails>;
}

export const defaultProjectDetailsState: ProjectDetailsState = {
    isLoading: true,
    projectDetails: {},
}