import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { NgxMasonryModule } from "ngx-masonry";

import { GalleryImagePreviewModule } from "../ui/gallery-image-preview/gallery-image-preview.component.module";
import { FeatureProjectDetailsComponent } from "./feature-project-details.component";

@NgModule({
	imports: [CommonModule, MatProgressSpinnerModule, NgxMasonryModule, GalleryImagePreviewModule],
	declarations: [FeatureProjectDetailsComponent],
	exports: [CommonModule, MatProgressSpinnerModule, NgxMasonryModule, GalleryImagePreviewModule],
})
export class FeatureProjectDetailsModule {}
