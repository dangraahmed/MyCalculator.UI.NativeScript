import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ApiService } from '../../shared/provider/api.service';
import { ILoginState } from '..';


@Injectable()
export class LoginService {

    constructor(private http: ApiService) {

    }

    login(login: any): Observable<any> {
        return this.http.post(login, 'tokenAuth/getAuthToken')
            .map(res => res)
            .catch(this.handleError.bind(this));
    }

    private handleError(error: any): Observable<any> {
        return Observable.throw(error.message || error);
    }
}
