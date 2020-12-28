import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NgxMasonryModule } from "ngx-masonry";

import { GalleryImagePreviewModule } from "../ui/gallery-image-preview/gallery-image-preview.component.module";
import { FeatureProjectDetailsComponent } from "./feature-project-details.component";

@NgModule({
	imports: [CommonModule, NgxMasonryModule, GalleryImagePreviewModule],
	declarations: [FeatureProjectDetailsComponent],
	exports: [CommonModule, NgxMasonryModule, GalleryImagePreviewModule],
})
export class FeatureProjectDetailsModule {}
