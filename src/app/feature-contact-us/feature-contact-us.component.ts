import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { faMailBulk, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FeatureContactUsState } from "./feature-contact-us.state";

@Component({
	selector: "app-feature-contact-us",
	templateUrl: "./feature-contact-us.component.html",
	styleUrls: ["./feature-contact-us.component.scss"],
})
export class FeatureContactUsComponent {
	readonly faMailBulk = faMailBulk;
	readonly faPhone = faPhone;

	constructor(private facade: FeatureContactUsState) {}

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
		this.facade.sendEmail(this.contactFormGroup.value);
	}
}
