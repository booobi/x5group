import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { Route, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ProjectsComponent } from "./projects/projects.component";

const routes: Route[] = [
	{ path: "", pathMatch: "full", redirectTo: "home" },
	{ path: "home", component: HomeComponent },
	{ path: "projects", component: ProjectsComponent },
];
@NgModule({
	declarations: [HomeComponent, ProjectsComponent],
	imports: [
		CommonModule,
		RouterModule.forRoot(routes, { relativeLinkResolution: "legacy" }),
		MatCardModule,
		MatButtonModule,
	],
	exports: [RouterModule],
})
export class AppRoutingModule {}
