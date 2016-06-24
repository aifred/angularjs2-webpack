import {Http, Headers, RequestOptionsArgs, Response, URLSearchParams} from '@angular/http';
import {Injectable, Optional} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import * as models from '../model/models';
import 'rxjs/Rx';

/* tslint:disable:no-unused-variable member-ordering */

'use strict';

@Injectable()
export class EServiceApi {
    protected basePath = 'http://demo4539349.mockable.io/boilerplate';
    public defaultHeaders : Headers = new Headers();

    constructor(protected http: Http, @Optional() basePath: string) {
        if (basePath) {
            this.basePath = basePath;
        }
    }

    /**
     *
     *
     * @param userId
     */
    public deleteBoilerplateIdUserIdGet (userId: number, extraHttpRequestParams?: any ) : Observable<models.RestResponse> {
        const path = this.basePath + '/deleteBoilerplate/id/{userId}'
            .replace('{' + 'userId' + '}', String(userId));

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'userId' is set
        if (!userId) {
            throw new Error('Missing required parameter userId when calling deleteBoilerplateIdUserIdGet');
        }
        let requestOptions: RequestOptionsArgs = {
            method: 'GET',
            headers: headerParams,
            search: queryParameters
        };

        return this.http.request(path, requestOptions)
            .map((response: Response) => response.json());
    }

    /**
     *
     *
     */
    public retrieveBoilerplateGet (extraHttpRequestParams?: any ) : Observable<models.RestResponse> {
        const path = this.basePath + '/retrieveBoilerplate';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        let requestOptions: RequestOptionsArgs = {
            method: 'GET',
            headers: headerParams,
            search: queryParameters
        };

        return this.http.request(path, requestOptions)
            .map((response: Response) => response.json());
    }

    /**
     *
     *
     * @param body
     */
    public saveBoilerPlatePost (body?: models.EService, extraHttpRequestParams?: any ) : Observable<{}> {
        const path = this.basePath + '/saveBoilerPlate';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        let requestOptions: RequestOptionsArgs = {
            method: 'POST',
            headers: headerParams,
            search: queryParameters
        };
        requestOptions.body = JSON.stringify(body);

        return this.http.request(path, requestOptions)
            .map((response: Response) => response.json());
    }

    /**
     *
     *
     * @param body
     */
    public updateBoilerPlatePost (body?: models.EService, extraHttpRequestParams?: any ) : Observable<models.RestResponse> {
        const path = this.basePath + '/updateBoilerPlate';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        let requestOptions: RequestOptionsArgs = {
            method: 'POST',
            headers: headerParams,
            search: queryParameters
        };
        requestOptions.body = JSON.stringify(body);

        return this.http.request(path, requestOptions)
            .map((response: Response) => response.json());
    }

}
