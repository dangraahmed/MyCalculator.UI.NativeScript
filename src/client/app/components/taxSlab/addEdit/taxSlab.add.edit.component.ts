// libs
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs/Rx';

import * as fromStore from '../../../modules/ngrx/index';

import { TaxSlab } from '../../../modules/taxSlab/actions/index';
import { ITaxSlab } from '../../../modules/taxSlab/index';

@Component({
    moduleId: module.id,
    selector: 'cal-tax-slab-add-edit',
    templateUrl: 'taxSlab.add.edit.component.html',
    styleUrls: ['taxSlab.add.edit.component.css']
})

export class TaxSlabAddEditComponent implements OnInit, OnDestroy {
    public taxSlab: ITaxSlab;
    private _ngUnsubscribe: Subject<void> = new Subject<void>();
    private selectedId: number;
    constructor(
        private store: Store<fromStore.IAppState>,
        private _activatedRouter: ActivatedRoute) {
    }

    ngOnInit() {
        this.store.select(fromStore.getSelectedTaxSlabsId)
        .takeUntil(this._ngUnsubscribe)
        .subscribe(selectedTaxSlabsId => {
            this.selectedId = selectedTaxSlabsId;
        });

        this.store.select(fromStore.getSelectedTaxSlab)
            .takeUntil(this._ngUnsubscribe)
            .subscribe(taxSlab => {
                if (!taxSlab.taxSlabDetail) {
                    this.store.dispatch(new TaxSlab.LoadTaxSlabDetailAction(this.selectedId));
                }
                this.taxSlab = taxSlab;
            });
    }

    ngOnDestroy() {
        this._ngUnsubscribe.next();
        this._ngUnsubscribe.complete();
    }
}
