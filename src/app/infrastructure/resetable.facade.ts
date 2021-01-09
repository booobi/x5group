import { Store } from "./store";

export abstract class BaseFacade<T> {
    constructor(protected store: Store<T>) {}

    reset() {
        this.store.patchToInitial();
    }

}