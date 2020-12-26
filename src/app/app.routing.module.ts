import { NgxMasonryModule } from "ngx-masonry";
import { NgModule } from "@angular/core";

import { CommonModule } from "@angular/common";
import { Route, RouterModule } from "@angular/router";
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { HomeComponent } from "./home/home.component";
import { ProjectsComponent } from "./projects/projects.component";
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { ProjectCardModule } from './ui/project-card/project-card.module';
import { GalleryImagePreviewModule } from "./ui/gallery-image-preview/gallery-image-preview.component.module";

const routes: Route[] = [
	{ path: "", pathMatch: "full", redirectTo: "home" },
	{ path: "home", component: HomeComponent },
	{ path: "projects", component: ProjectsComponent, pathMatch: 'full' },
    { path: 'projects/:projectId', component: ProjectDetailsComponent },

];
@NgModule({
	declarations: [HomeComponent, ProjectsComponent, ProjectDetailsComponent],
	imports: [
		CommonModule,
		RouterModule.forRoot(routes, { relativeLinkResolution: "legacy" }),
		BrowserAnimationsModule,
        HttpClientModule,
        ProjectCardModule,
        GalleryImagePreviewModule,
        FontAwesomeModule,
        NgxMasonryModule,
    ],
	exports: [RouterModule],
})
export class AppRoutingModule {}
