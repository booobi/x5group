import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgxMasonryModule } from "ngx-masonry";
import { GalleryImagePreviewModule } from "../ui/gallery-image-preview/gallery-image-preview.component.module";
import { ProjectCardModule } from "../ui/project-card/project-card.module";
import { ProjectsComponent } from "./projects.component";

@NgModule({
    imports: [
        CommonModule,
        BrowserAnimationsModule,
        ProjectCardModule,
        GalleryImagePreviewModule,
        NgxMasonryModule,
    ],
    declarations: [ProjectsComponent],
    exports: [ProjectsComponent, CommonModule, BrowserAnimationsModule, ProjectCardModule, GalleryImagePreviewModule, NgxMasonryModule],
})
export class ProjectsModule {

}