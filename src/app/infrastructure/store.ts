import { ReplaySubject } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';

export class Store<T> {
    _state: T;
    _initialState: T;
    _state$ = new ReplaySubject(1);

    state$ = this._state$.asObservable();

    constructor(initialState: T) {
        this._initialState = initialState;
        this._state = initialState;
        this._state$.next(initialState);
    }

    select(selector: (state: T) => any) {
        return this.state$.pipe(map(selector), distinctUntilChanged());
    }

    patchState(statePatch: Partial<T>) {
        this._state = { ...this._state, ...statePatch};
        this._state$.next(this._state);
    }

    patchToInitial() {
        this._state = { ...this._initialState };
        this._state$.next({...this._initialState});
    }
}