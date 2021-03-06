import {Http, Headers, RequestOptionsArgs, Response, URLSearchParams} from '@angular/http';
import {Injectable, Optional} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import * as models from '../model/models';
import 'rxjs/Rx';

/* tslint:disable:no-unused-variable member-ordering */

'use strict';

@Injectable()
export class UserApi {
    protected basePath = 'http://petstore.swagger.io/v2';
    public defaultHeaders : Headers = new Headers();

    constructor(protected http: Http, @Optional() basePath: string) {
        if (basePath) {
            this.basePath = basePath;
        }
    }

    /**
     * Create user
     * This can only be done by the logged in user.
     * @param body Created user object
     */
    public createUser (body: models.User, extraHttpRequestParams?: any ) : Observable<{}> {
        const path = this.basePath + '/user';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'body' is set
        if (!body) {
            throw new Error('Missing required parameter body when calling createUser');
        }
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
     * Creates list of users with given input array
     * 
     * @param body List of user object
     */
    public createUsersWithArrayInput (body: Array<models.User>, extraHttpRequestParams?: any ) : Observable<{}> {
        const path = this.basePath + '/user/createWithArray';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'body' is set
        if (!body) {
            throw new Error('Missing required parameter body when calling createUsersWithArrayInput');
        }
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
     * Creates list of users with given input array
     * 
     * @param body List of user object
     */
    public createUsersWithListInput (body: Array<models.User>, extraHttpRequestParams?: any ) : Observable<{}> {
        const path = this.basePath + '/user/createWithList';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'body' is set
        if (!body) {
            throw new Error('Missing required parameter body when calling createUsersWithListInput');
        }
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
     * Delete user
     * This can only be done by the logged in user.
     * @param username The name that needs to be deleted
     */
    public deleteUser (username: string, extraHttpRequestParams?: any ) : Observable<{}> {
        const path = this.basePath + '/user/{username}'
            .replace('{' + 'username' + '}', String(username));

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'username' is set
        if (!username) {
            throw new Error('Missing required parameter username when calling deleteUser');
        }
        let requestOptions: RequestOptionsArgs = {
            method: 'DELETE',
            headers: headerParams,
            search: queryParameters
        };

        return this.http.request(path, requestOptions)
            .map((response: Response) => response.json());
    }

    /**
     * Get user by user name
     * 
     * @param username The name that needs to be fetched. Use user1 for testing. 
     */
    public getUserByName (username: string, extraHttpRequestParams?: any ) : Observable<models.User> {
        const path = this.basePath + '/user/{username}'
            .replace('{' + 'username' + '}', String(username));

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'username' is set
        if (!username) {
            throw new Error('Missing required parameter username when calling getUserByName');
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
     * Logs user into the system
     * 
     * @param username The user name for login
     * @param password The password for login in clear text
     */
    public loginUser (username: string, password: string, extraHttpRequestParams?: any ) : Observable<string> {
        const path = this.basePath + '/user/login';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'username' is set
        if (!username) {
            throw new Error('Missing required parameter username when calling loginUser');
        }
        // verify required parameter 'password' is set
        if (!password) {
            throw new Error('Missing required parameter password when calling loginUser');
        }
        if (username !== undefined) {
            queryParameters.set('username', username);
        }

        if (password !== undefined) {
            queryParameters.set('password', password);
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
     * Logs out current logged in user session
     * 
     */
    public logoutUser (extraHttpRequestParams?: any ) : Observable<{}> {
        const path = this.basePath + '/user/logout';

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
     * Updated user
     * This can only be done by the logged in user.
     * @param username name that need to be updated
     * @param body Updated user object
     */
    public updateUser (username: string, body: models.User, extraHttpRequestParams?: any ) : Observable<{}> {
        const path = this.basePath + '/user/{username}'
            .replace('{' + 'username' + '}', String(username));

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'username' is set
        if (!username) {
            throw new Error('Missing required parameter username when calling updateUser');
        }
        // verify required parameter 'body' is set
        if (!body) {
            throw new Error('Missing required parameter body when calling updateUser');
        }
        let requestOptions: RequestOptionsArgs = {
            method: 'PUT',
            headers: headerParams,
            search: queryParameters
        };
        requestOptions.body = JSON.stringify(body);

        return this.http.request(path, requestOptions)
            .map((response: Response) => response.json());
    }

}
