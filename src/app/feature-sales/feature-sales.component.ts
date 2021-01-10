import { Subject } from "rxjs";
import { map, shareReplay, takeUntil, tap } from "rxjs/operators";

import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { FeatureSalesFacade } from "../infrastructure/state/sales.facade";
import { SalesUnit } from "../infrastructure/state/sales.state";
import { getUnityTypeName } from "./feature-sales.config";
import { FormArray, FormBuilder, FormGroup } from "@angular/forms";

@Component({
	selector: "app-feature-sales",
	templateUrl: "./feature-sales.component.html",
	styleUrls: ["./feature-sales.component.scss"],
})
export class FeatureSalesComponent implements OnInit {
	readonly columns = ["name", "type", "floor", "area", "price"];

    readonly getUnityTypeName = getUnityTypeName;
    
    filterForm: FormGroup;

	projectNameGetter$ = this.facade.salesData$.pipe(
        map(salesData => projectId => salesData.find(data => data.projectId === projectId).projectName),
        shareReplay(1),
    );

	testFilter() {
		this.dataSource.filter = "1";
	}

	destroyed$ = new Subject<boolean>();

	dataSource = new MatTableDataSource();

	constructor(
		private facade: FeatureSalesFacade,
		public fb: FormBuilder,
	) {}

	ngOnInit() {
		this.facade.salesData$
			.pipe(takeUntil(this.destroyed$))
			.subscribe((salesData) => (this.dataSource.data = salesData));

		this.dataSource.filterPredicate = (sale: SalesUnit, projectIds: string) =>
            projectIds.includes(sale.projectId);
            
            this.facade.salesData$
							.pipe(
								// get unique sale projects ids
								map((sales) =>
									sales.filter(
										(sale, currentIndex, arr) =>
											arr.findIndex((s) => s.projectId === sale.projectId) ===
											currentIndex
									)
								),
								map((uniqueProjectSales) =>
									uniqueProjectSales.map((sale) => ({
										id: sale.projectId,
										displayName: sale.projectName,
									}))
								),
								tap(
									objts =>
										(this.filterForm = this.fb.group(
											objts.reduce(
												(config, obj) => ({ ...config, [obj.id]: false }),
												{}
											)
										))
								),
								tap((_) => console.log(this.filterForm))
							)
                            .subscribe();
                            
                            this.filterForm.valueChanges.subscribe(console.log);
    }
    
    get formKeysArr() {
        return Object.keys(this.filterForm.controls);
    }

	ngOnDestroy() {
		this.destroyed$.next(true);
		this.destroyed$.complete();
	}
}
