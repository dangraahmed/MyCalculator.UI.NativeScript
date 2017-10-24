// libs
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs/Rx';

import * as fromStore from '../../../modules/ngrx/index';

import { TaxSlab } from '../../../modules/taxSlab/actions/index';
import { ITaxSlab, ITaxSlabDetail } from '../../../modules/taxSlab/index';

@Component({
    moduleId: module.id,
    selector: 'cal-tax-slab-add-edit',
    templateUrl: 'taxSlab.add.edit.component.html',
    styleUrls: ['taxSlab.add.edit.component.css']
})

export class TaxSlabAddEditComponent implements OnInit, OnDestroy {
    public taxSlabform: FormGroup;
    private _ngUnsubscribe: Subject<void> = new Subject<void>();
    private selectedId: number;
    constructor(
        private store: Store<fromStore.IAppState>,
        private _activatedRouter: ActivatedRoute,
        private _formBuilder: FormBuilder) {
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
                this.createTaxSlabForm(taxSlab);
            });
    }

    createTaxSlabForm(taxSlab: ITaxSlab) {
        this.taxSlabform = this._formBuilder.group({
            'fromYear': [taxSlab.fromYear, Validators.required],
            'toYear': [taxSlab.toYear, Validators.required],
            'category': [taxSlab.category, Validators.required],
            'taxSlabDetail': this._formBuilder.array([])
        });

        this.createTaxSlabDetailForm(taxSlab.taxSlabDetail);
    }

    createTaxSlabDetailForm(taxSlabDetailArray: Array<ITaxSlabDetail>) {
        if (taxSlabDetailArray) {
            taxSlabDetailArray.forEach(taxSlabDetail => {
                this.addRange(taxSlabDetail);
            });
        }

    }

    ngOnDestroy() {
        this._ngUnsubscribe.next();
        this._ngUnsubscribe.complete();
    }

    removeRange(taxSlabDetailIndex: number) {
        let taxSlabDetail = <FormArray>this.taxSlabform.controls['taxSlabDetail'];
        taxSlabDetail.removeAt(taxSlabDetailIndex);
    }

    addRange(taxSlabDetail: ITaxSlabDetail) {
        let taxSlabDetailControl = <FormArray>this.taxSlabform.controls['taxSlabDetail'];
        taxSlabDetailControl.push(this.gettaxSlabDetailForm(taxSlabDetail));
    }

    private gettaxSlabDetailForm(taxSlabDetail: ITaxSlabDetail) {
        if (taxSlabDetail) {
            return this._formBuilder.group({
                'slabFromAmount': [taxSlabDetail.slabFromAmount],
                'slabToAmount': [taxSlabDetail.slabToAmount],
                'percentage': [taxSlabDetail.percentage, Validators.required]
            });
        } else {
            return this._formBuilder.group({
                'slabFromAmount': [''],
                'slabToAmount': [''],
                'percentage': ['', Validators.required]
            });
        }

    }
}
