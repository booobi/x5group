import { NgModule } from "@angular/core";

import { CommonModule } from "@angular/common";
import { Route, RouterModule } from "@angular/router";
import { HttpClientModule } from '@angular/common/http';

import { FeatureHomeModule } from "./feature-home/feature-home.module";
import { FeatureHomeComponent } from "./feature-home/feature-home.component";
import { FeatureProjectDetailsModule } from "./feature-project-details/feature-project-details.module";
import { FeatureProjectDetailsComponent } from './feature-project-details/feature-project-details.component';
import { FeatureProjectsModule } from "./feature-projects/feature-projects.module";
import { FeatureProjectsComponent } from "./feature-projects/feature-projects.component";


const routes: Route[] = [
	{ path: "", pathMatch: "full", redirectTo: "home" },
	{ path: "home", component: FeatureHomeComponent },
	{ path: "projects", component: FeatureProjectsComponent, pathMatch: 'full' },
    { path: 'projects/:projectId', component: FeatureProjectDetailsComponent },

];
@NgModule({
	imports: [
		RouterModule.forRoot(routes, { relativeLinkResolution: "legacy" }),
		HttpClientModule,
		// I want to go with a feature module based approach, (sorry if you don't like it, but it's clean af)
		// as you'd do in an NX environment within a single domain
		// but that means also exporting all dependency modules (since im not lazy loading the features)
		// also modules are cached so there should be no performance hit
		// TODO: maybe actually switch to lazy loading just for the heck of it?
		FeatureHomeModule,
		FeatureProjectsModule,
		FeatureProjectDetailsModule,
    ],
	exports: [RouterModule],
})
export class AppRoutingModule {}
