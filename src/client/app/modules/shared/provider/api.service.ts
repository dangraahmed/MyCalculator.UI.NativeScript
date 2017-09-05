import { Headers, Http, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { StorageKey, StorageService } from '../../../modules/core/index';
import { Config } from '../../core/index';

export class CvltService {

    constructor(private http: Http,
        private storage: StorageService) { }

    get(object: any, methodName: string): Observable<any> {
        let header = this.initHeaders();
        let options = new RequestOptions({ headers: header, method: 'get' });
        return this.http.get(Config.ENVIRONMENT().API + methodName, options)
            .map(res => {
                return res.json();
            })
            .catch(this.handleError.bind(this));
    }

    post(object: any, methodName: string): Observable<any> {
        let header = this.initHeaders();
        let options = new RequestOptions({ headers: header, method: 'post' });
        let body = JSON.stringify(object);
        return this.http.post(Config.ENVIRONMENT().API + methodName, body, options)
            .map(res => {
                return res.json();
            })
            .catch(this.handleError.bind(this));
    }

    private initHeaders(): Headers {
        let token = this.storage.getItem(StorageKey.USER_TOKEN);
        var headers = new Headers();
        if (token !== null) {
            headers.append('Authorization', token);
        }

        headers.append('Accept', 'application/json');
        headers.append('Content-Type', 'application/json');
        return headers;
    }

    private handleError(error: any): Observable<any> {
        return Observable.throw(error.message || error);
    }
}