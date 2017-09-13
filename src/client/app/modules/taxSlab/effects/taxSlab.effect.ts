import { Injectable } from '@angular/core';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Store, Action } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';
import { TaxSlabService } from '../services/taxSlab.service';
import { TaxSlab } from '../actions/index';

@Injectable()
export class TaxSlabEffects {
    // @Effect()
    // loadTaxSlabs$: Observable<Action> = this.actions$
    //     .ofType(TaxSlab.ActionTypes.LOAD_TAX_SLAB)
    //     .debounceTime(300)
    //     .map(toPayload)
    //     .switchMap(param => {
    //         return this.taxSlabService.getTaxSlabs()
    //             .map(payload => {
    //                 return new TaxSlab.LoadTaxSlabSuccessfulAction(payload);
    //             })
    //             .catch((e) => {
    //                 return Observable.of(new TaxSlab.LoadTaxSlabFailedAction());
    //             });
    //     });

    @Effect() loadTaxSlabs$: Observable<Action> = this.actions$
        .ofType(TaxSlab.ActionTypes.LOAD_TAX_SLAB)
        .switchMap(() => this.taxSlabService.getTaxSlabs())
        .map(payload => new TaxSlab.LoadTaxSlabSuccessfulAction(payload))
        .catch(() => Observable.of(new TaxSlab.LoadTaxSlabFailedAction()));


    @Effect() loadTaxSlabDetail$: Observable<Action> = this.actions$
        .ofType(TaxSlab.ActionTypes.LOAD_TAX_SLAB_DETAIL)
        .map(toPayload)
        .switchMap(taxSlabId => {
            return this.taxSlabService.getTaxSlabDetail(taxSlabId)
            .map(payload => new TaxSlab.LoadTaxSlabDetailSuccessfulAction(payload))
            .catch(() => Observable.of(new TaxSlab.LoadTaxSlabDetailFailedAction()));
        });

    constructor(
        private store: Store<any>,
        private actions$: Actions,
        private taxSlabService: TaxSlabService) {

    }
}
