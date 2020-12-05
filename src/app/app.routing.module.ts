import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { ProjectsComponent } from "./projects/projects.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { ProjectDetailsComponent } from './project-details/project-details.component';

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
		FontAwesomeModule,
	],
	exports: [RouterModule],
})
export class AppRoutingModule {}
