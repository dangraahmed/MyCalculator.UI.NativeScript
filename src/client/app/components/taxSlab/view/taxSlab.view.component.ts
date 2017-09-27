// libs
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs/Rx';

import * as fromStore from '../../../modules/ngrx/index';

// app
import { RouterExtensions, Config } from '../../../modules/core/index';

import { TaxSlab } from '../../../modules/taxSlab/actions/index';
import { ITaxSlabState } from '../../../modules/taxSlab/index';

import { Ui } from '../../../modules/ui/index';

@Component({
    moduleId: module.id,
    selector: 'cal-tax-slab',
    templateUrl: 'taxSlab.view.component.html',
    styleUrls: ['taxSlab.view.component.css']
})
export class TaxSlabViewComponent implements OnInit, OnDestroy {
    public listOfTaxSlab: ITaxSlabState;
    private _ngUnsubscribe: Subject<void> = new Subject<void>();

    constructor(private store: Store<fromStore.IAppState>, public routerext: RouterExtensions) {
    }

    ngOnInit() {
        this.store.select(fromStore.getTaxSlabs)
            .takeUntil(this._ngUnsubscribe)
            .subscribe(taxSlabs => {
                if (!taxSlabs) {
                    this.store.dispatch(new TaxSlab.LoadTaxSlabAction());
                }
                this.listOfTaxSlab = taxSlabs;
            });
    }

    selectTaxSlab(selectedTaxSlabId: number) {
        this.store.dispatch(new Ui.SelectTaxSlab(selectedTaxSlabId));

        this.routerext.navigate(['/admin/taxSlab/viewDetail']);

    }

    ngOnDestroy() {
        this._ngUnsubscribe.next();
        this._ngUnsubscribe.complete();
    }
}
