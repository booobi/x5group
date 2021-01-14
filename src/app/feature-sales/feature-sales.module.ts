import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatTableModule } from "@angular/material/table";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatSortModule } from "@angular/material/sort";
import { FeatureSalesComponent } from "./feature-sales.component";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		MatTableModule,
		MatSortModule,
		MatCheckboxModule,
		MatProgressSpinnerModule,
	],
	declarations: [FeatureSalesComponent],
	exports: [
		CommonModule,
		FeatureSalesComponent,
		MatTableModule,
		MatCheckboxModule,
		MatProgressSpinnerModule,
	],
})
export class FeatureSalesModule {}
