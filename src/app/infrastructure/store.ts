import { BehaviorSubject, ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';

export class Store<T> {
    _state: T;
    _state$ = new ReplaySubject(1);

    state$ = this._state$.asObservable();

    constructor(initialState: T) {
        this._state = initialState;
        this._state$.next(initialState);
    }

    select(selector: (state: T) => any) {
        return this.state$.pipe(map(selector));
    }

    patchState(statePatch: Partial<T>) {
        this._state = { ...this._state, ...statePatch};
        this._state$.next(this._state);
    }
}