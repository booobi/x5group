import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from "@angular/material/dialog";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { NgxMasonryModule } from "ngx-masonry";

import { GalleryImagePreviewModule } from "../ui/gallery-image-preview/gallery-image-preview.module";
import { FeatureProjectDetailsComponent } from "./feature-project-details.component";

@NgModule({
	imports: [
		CommonModule,
		MatProgressSpinnerModule,
		MatButtonModule,
		MatDialogModule,
		GalleryImagePreviewModule,
		FontAwesomeModule,
		NgxMasonryModule,
	],
	declarations: [FeatureProjectDetailsComponent],
	exports: [
		CommonModule,
		MatProgressSpinnerModule,
		MatDialogModule,
		MatButtonModule,
		GalleryImagePreviewModule,
		FontAwesomeModule,
		NgxMasonryModule,
	],
})
export class FeatureProjectDetailsModule {}
