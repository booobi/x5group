import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";

import { FeatureProjectsComponent } from "./feature-projects.component";

describe("FeatureProjectsComponent", () => {
	let component: FeatureProjectsComponent;
	let fixture: ComponentFixture<FeatureProjectsComponent>;

	beforeEach(
		waitForAsync(() => {
			TestBed.configureTestingModule({
				declarations: [FeatureProjectsComponent],
			}).compileComponents();
		})
	);

	beforeEach(() => {
		fixture = TestBed.createComponent(FeatureProjectsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
