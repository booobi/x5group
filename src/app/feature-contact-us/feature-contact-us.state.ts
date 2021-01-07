import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Store } from "../infrastructure/store";

interface ContactUsState {
	isLoading: boolean;
}
const defaultContactUsState: ContactUsState = {
	isLoading: false,
};

export interface ContactData {
	email: string;
	phone: string;
	message: string;
}

@Injectable({ providedIn: "root" })
export class FeatureContactUsState {
	store: Store<ContactUsState> = new Store(defaultContactUsState);

	constructor(private http: HttpClient) {}

	sendEmail(contactData: ContactData) {
		const endpoint = `${environment.BACKEND_BASE_URL}/contact`;

		this.store.patchState({ isLoading: true });
		this.http
			.post(endpoint, contactData)
			.subscribe((_) => this.store.patchState({ isLoading: false }));
	}
}
