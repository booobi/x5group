import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { GalleryImagePreviewComponent } from "./gallery-image-preview.component";

@NgModule({
    imports: [MatButtonModule],
    declarations: [GalleryImagePreviewComponent],
    exports: [GalleryImagePreviewComponent, MatButtonModule]
})
export class GalleryImagePreviewModule {}