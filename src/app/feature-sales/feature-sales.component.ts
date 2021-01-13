import { Subject } from "rxjs";
import { map, shareReplay, switchMap, takeUntil } from "rxjs/operators";

import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { FeatureSalesFacade } from "../infrastructure/state/sales.facade";
import { SalesUnit } from "../infrastructure/state/sales.state";
import { getUnityTypeName } from "./feature-sales.config";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { MatSort } from "@angular/material/sort";

@Component({
	selector: "app-feature-sales",
	templateUrl: "./feature-sales.component.html",
	styleUrls: ["./feature-sales.component.scss"],
})
export class FeatureSalesComponent implements OnInit, AfterViewInit {
	readonly columns = ["name", "type", "floor", "area", "price"];

	readonly getUnityTypeName = getUnityTypeName;

	@ViewChild(MatSort) sort: MatSort;

	projectNameGetter$ = this.facade.salesData$.pipe(
		map((salesData) => (projectId) =>
			salesData.find((data) => data.projectId === projectId).projectName
		),
		shareReplay(1)
	);

	destroyed$ = new Subject<boolean>();

	dataSource = new MatTableDataSource();

	filtersForm$ = this.facade.salesData$.pipe(
		// get unique sale projects ids
		map((sales) =>
			sales
				.filter(
					(sale, currentIndex, arr) =>
						arr.findIndex((s) => s.projectId === sale.projectId) ===
						currentIndex
				)
				.map((sale) => sale.projectId)
		),
		map(
			(projectIds) =>
				new FormGroup(
					projectIds.reduce(
						(config, projectId) => ({
							...config,
							[projectId]: new FormControl(),
						}),
						{}
					)
				)
		),
		shareReplay(1),
	);

	filtersFormKeys$ = this.filtersForm$.pipe(
		map((filtersForm) => Object.keys(filtersForm.controls))
	);

	constructor(private facade: FeatureSalesFacade, public fb: FormBuilder) {}

	ngOnInit() {
		this.facade.getSales();
		this.facade.salesData$
			.pipe(takeUntil(this.destroyed$))
			.subscribe((salesData) => (this.dataSource.data = salesData));

		this.dataSource.filterPredicate = (sale: SalesUnit, projectIds: string) =>
			projectIds.includes(sale.projectId);
			
		this.filtersForm$
			.pipe(
				switchMap((form) => form.valueChanges),
				map((formValue) =>
					Object.entries(formValue).reduce(
						(accumulatedProjectIds, [formKey, value]) =>
							value
								? `${accumulatedProjectIds},${formKey}`
								: accumulatedProjectIds,
						""
					)
				)
			)
			.subscribe((value) => this.dataSource.filter = value);
	}
	
	ngAfterViewInit() {
		this.dataSource.sort = this.sort;
	}

	ngOnDestroy() {
		this.destroyed$.next(true);
		this.destroyed$.complete();
	}
}
