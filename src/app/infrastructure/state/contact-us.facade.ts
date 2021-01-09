import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { BaseFacade } from "../resetable.facade";
import { Store } from "../store";
import { ContactData, ContactStatus } from "../types/contact";
import { ContactUsState, defaultContactUsState } from "./contact-us.state";

@Injectable({ providedIn: "root" })
export class FeatureContactUsFacade extends BaseFacade<ContactUsState> {
    isLoading$ = this.store.select(state => state.isLoading);

    contactState$ = this.store.select(state => state.contactStatus);

    constructor(private http: HttpClient) {
        super(new Store(defaultContactUsState));
     }

    sendEmail(contactData: ContactData) {
        const endpoint = `${environment.BACKEND_BASE_URL}/contact`;

        this.store.patchState({ isLoading: true });
        this.http
            .post(endpoint, contactData)
            .subscribe(
                _ => this.store.patchState({ isLoading: false, contactStatus: ContactStatus.CONTACT_SUCCESS }),
                _ => this.store.patchState({ isLoading: false, contactStatus: ContactStatus.CONTACT_FAIL })
            );
    }
}
