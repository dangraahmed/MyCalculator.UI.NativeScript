import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ApiService } from '../../shared/provider/api.service';
import { ITaxSlab } from '../states/taxSlab.state';

@Injectable()
export class TaxSlabService {

    constructor(
        private http: ApiService
    ) {
    }

    getTaxSlabs(): Observable<Array<ITaxSlab>> {
        debugger;
        return this.http.get({}, 'taxSlab/listTaxSlabs')
            .map(res => res)
            .catch(this.handleError.bind(this));
    }

    private handleError(error: any): Observable<any> {
        return Observable.throw(error.message || error);
    }
}
