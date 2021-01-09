import { Component, OnDestroy } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { faMailBulk, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FeatureContactUsFacade } from "../infrastructure/state/contact-us.facade";
import { ContactStatus } from "../infrastructure/types/contact";

@Component({
	selector: "app-feature-contact-us",
	templateUrl: "./feature-contact-us.component.html",
	styleUrls: ["./feature-contact-us.component.scss"],
})
export class FeatureContactUsComponent implements OnDestroy {
	readonly faMailBulk = faMailBulk;
    readonly faPhone = faPhone;
    readonly ContactStatus = ContactStatus;
    
    isLoading$ = this.facade.isLoading$;

    contactState$ = this.facade.contactState$;

	constructor(private facade: FeatureContactUsFacade) {}

	contactFormGroup = new FormGroup({
		email: new FormControl("", [Validators.required, Validators.email]),
		phone: new FormControl(),
		message: new FormControl("", [Validators.required]),
	});

	get emailControl() {
		return this.contactFormGroup.controls.email;
	}

	get phoneControl() {
		return this.contactFormGroup.controls.phone;
	}

	get messageControl() {
		return this.contactFormGroup.controls.message;
	}

	onSubmit() {
        if (this.contactFormGroup.valid) {
            this.facade.sendEmail(this.contactFormGroup.value);
            this.contactFormGroup.reset();
        }
    }
    
    onRetry(clickEvent: Event) {
        clickEvent.preventDefault();
        this.facade.reset();
    }

    ngOnDestroy() {
        this.facade.reset();
    }
}
