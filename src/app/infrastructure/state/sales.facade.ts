import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { BaseFacade } from "../resetable.facade";
import { Store } from "../store";
import { defaultSalesState, SalesResponse, SalesState, SalesUnit } from "./sales.state";

@Injectable({ providedIn: "root" })
export class FeatureSalesFacade extends BaseFacade<SalesState> {
    endpoint = `${environment.BACKEND_BASE_URL}/sales`;

    isLoading$: Observable<boolean> = this.store.select(state => state.isLoading);

    salesData$: Observable<SalesUnit[]> = this.store.select(state => state.salesData);

    constructor(private http: HttpClient) {
        super(new Store(defaultSalesState));
     }

    getSales() {
        this.store.patchState({ isLoading: true });
        this.http
            .get<SalesResponse>(this.endpoint)
            .subscribe(
                response => this.store.patchState({ isLoading: false, salesData: response.items }),
                _ => this.store.patchState({ isLoading: false })
            );
    }
}
