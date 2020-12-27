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
import { ProjectsModule } from "./projects/projects.module";

const routes: Route[] = [
	{ path: "", pathMatch: "full", redirectTo: "home" },
	{ path: "home", component: HomeComponent },
	{ path: "projects", component: ProjectsComponent, pathMatch: 'full' },
    { path: 'projects/:projectId', component: ProjectDetailsComponent },

];
@NgModule({
	declarations: [HomeComponent, ProjectDetailsComponent],
	imports: [
		CommonModule,
		RouterModule.forRoot(routes, { relativeLinkResolution: "legacy" }),
		HttpClientModule,
        FontAwesomeModule,
        // I want to go with a feature module based approach, (like you'd do with lazy loading)
        // but that means also exporting all dependency modules
        // TODO: maybe actually switch to lazy loading just for the heck of it?
        ProjectsModule,
    ],
	exports: [RouterModule],
})
export class AppRoutingModule {}
