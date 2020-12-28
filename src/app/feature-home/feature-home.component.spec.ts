import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";

import { FeatureHomeComponent } from "./feature-home.component";

describe("FeatureHomeComponent", () => {
	let component: FeatureHomeComponent;
	let fixture: ComponentFixture<FeatureHomeComponent>;

	beforeEach(
		waitForAsync(() => {
			TestBed.configureTestingModule({
				declarations: [FeatureHomeComponent],
			}).compileComponents();
		})
	);

	beforeEach(() => {
		fixture = TestBed.createComponent(FeatureHomeComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
