import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgxMasonryModule } from "ngx-masonry";

import { GalleryImagePreviewModule } from "../ui/gallery-image-preview/gallery-image-preview.module";
import { ProjectCardModule } from "../ui/project-card/project-card.module";
import { FeatureProjectsComponent } from "./feature-projects.component";

@NgModule({
	imports: [
		CommonModule,
		BrowserAnimationsModule,
		MatProgressSpinnerModule,
		ProjectCardModule,
	],
	declarations: [FeatureProjectsComponent],
	exports: [
		FeatureProjectsComponent,
		CommonModule,
		BrowserAnimationsModule,
		ProjectCardModule,
		GalleryImagePreviewModule,
		NgxMasonryModule,
	],
})
export class FeatureProjectsModule {}
