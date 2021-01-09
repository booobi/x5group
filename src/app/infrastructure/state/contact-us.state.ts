import { ContactStatus } from "../types/contact";

export interface ContactUsState {
    isLoading: boolean;
    contactStatus: ContactStatus,
}

export const defaultContactUsState: ContactUsState = {
    isLoading: false,
    contactStatus: ContactStatus.NOT_CONTACTED,
};
