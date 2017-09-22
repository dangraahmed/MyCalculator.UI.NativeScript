// libs
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs/Rx';

import * as fromStore from '../../../modules/ngrx/index';

import { TaxSlab } from '../../../modules/taxSlab/actions/index';
import { ITaxSlabState } from '../../../modules/taxSlab/index';

@Component({
    moduleId: module.id,
    selector: 'cal-tax-slab-detail',
    templateUrl: 'taxSlab.detail.view.component.html',
    styleUrls: ['taxSlab.detail.view.component.css']
})
export class TaxSlabViewDetailComponent implements OnInit, OnDestroy {
    public listOfTaxSlab: ITaxSlabState;
    private _ngUnsubscribe: Subject<void> = new Subject<void>();
    private selectedId: number;
    constructor(
        private store: Store<fromStore.IAppState>,
        private _activatedRouter: ActivatedRoute) {
        this._activatedRouter.params
            .takeUntil(this._ngUnsubscribe)
            .subscribe((params: { id: number }) => {
                this.selectedId = params.id;
            });
    }

    ngOnInit() {
        console.log(this.selectedId);
        this.store.select(fromStore.getTaxSlabsDetail)
            .takeUntil(this._ngUnsubscribe)
            .subscribe(taxSlabs => {
                if (!taxSlabs) {
                    this.store.dispatch(new TaxSlab.LoadTaxSlabDetailAction(6));
                }
                this.listOfTaxSlab = taxSlabs;
            });
    }

    ngOnDestroy() {
        this._ngUnsubscribe.next();
        this._ngUnsubscribe.complete();
    }
}
