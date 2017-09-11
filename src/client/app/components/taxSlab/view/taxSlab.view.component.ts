// libs
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs/Rx';

import * as fromStore from '../../../modules/ngrx/index';

import { TaxSlab } from '../../../modules/taxSlab/actions/index';
import { ITaxSlab } from '../../../modules/taxSlab/index';

@Component({
    moduleId: module.id,
    selector: 'cal-tax-slab',
    templateUrl: 'taxSlab.view.component.html',
    styleUrls: ['taxSlab.view.component.css']
})
export class TaxSlabViewComponent implements OnInit, OnDestroy {
    public listOfTaxSlab: Array<ITaxSlab>;
    private _ngUnsubscribe: Subject<void> = new Subject<void>();

    constructor(private store: Store<fromStore.IAppState>) {
    }

    ngOnInit() {
        this.store.select(fromStore.getTaxSlabs)
            .takeUntil(this._ngUnsubscribe)
            .subscribe(taxSlabs => {
                if(!taxSlabs) {
                    this.store.dispatch(new TaxSlab.LoadTaxSlabAction());
                }
                this.listOfTaxSlab = taxSlabs;
            });

        // this.store.dispatch(new TaxSlab.LoadTaxSlabAction());
    }

    ngOnDestroy() {
        this._ngUnsubscribe.next();
        this._ngUnsubscribe.complete();
    }
}
