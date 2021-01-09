export enum ContactStatus {
    NOT_CONTACTED = 'NOT_CONTACTED',
    CONTACT_SUCCESS = 'CONTACT_SUCCESS',
    CONTACT_FAIL = 'CONTACT_FAIL',
}

export interface ContactData {
    email: string;
    phone: string;
    message: string;
}
