import {Http, Headers, RequestOptionsArgs, Response, URLSearchParams} from '@angular/http';
import {Injectable, Optional} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import * as models from '../model/models';
import 'rxjs/Rx';

/* tslint:disable:no-unused-variable member-ordering */

'use strict';

@Injectable()
export class PetApi {
    protected basePath = 'http://petstore.swagger.io/v2';
    public defaultHeaders : Headers = new Headers();

    constructor(protected http: Http, @Optional() basePath: string) {
        if (basePath) {
            this.basePath = basePath;
        }
    }

    /**
     * Add a new pet to the store
     *
     * @param body Pet object that needs to be added to the store
     */
    public addPet (body: models.Pet, extraHttpRequestParams?: any ) : Observable<{}> {
        const path = this.basePath + '/pet';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'body' is set
        if (!body) {
            throw new Error('Missing required parameter body when calling addPet');
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
     * Deletes a pet
     *
     * @param petId Pet id to delete
     * @param apiKey
     */
    public deletePet (petId: number, apiKey?: string, extraHttpRequestParams?: any ) : Observable<{}> {
        const path = this.basePath + '/pet/{petId}'
            .replace('{' + 'petId' + '}', String(petId));

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'petId' is set
        if (!petId) {
            throw new Error('Missing required parameter petId when calling deletePet');
        }
            headerParams.set('api_key', apiKey);

        let requestOptions: RequestOptionsArgs = {
            method: 'DELETE',
            headers: headerParams,
            search: queryParameters
        };

        return this.http.request(path, requestOptions)
            .map((response: Response) => response.json());
    }

    /**
     * Finds Pets by status
     * Multiple status values can be provided with comma separated strings
     * @param status Status values that need to be considered for filter
     */
    public findPetsByStatus (status: Array<string>, extraHttpRequestParams?: any ) : Observable<Array<models.Pet>> {
        const path = this.basePath + '/pet/findByStatus';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'status' is set
        if (!status) {
            throw new Error('Missing required parameter status when calling findPetsByStatus');
        }
        if (status !== undefined) {
            queryParameters.set('status', status.toString());
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
     * Finds Pets by tags
     * Muliple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
     * @param tags Tags to filter by
     */
    public findPetsByTags (tags: Array<string>, extraHttpRequestParams?: any ) : Observable<Array<models.Pet>> {
        const path = this.basePath + '/pet/findByTags';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'tags' is set
        if (!tags) {
            throw new Error('Missing required parameter tags when calling findPetsByTags');
        }
        if (tags !== undefined) {
            queryParameters.set('tags', tags.toString());
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
     * Find pet by ID
     * Returns a single pet
     * @param petId ID of pet to return
     */
    public getPetById (petId: number, extraHttpRequestParams?: any ) : Observable<models.Pet> {
        const path = this.basePath + '/pet/{petId}'
            .replace('{' + 'petId' + '}', String(petId));

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'petId' is set
        if (!petId) {
            throw new Error('Missing required parameter petId when calling getPetById');
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
     * Update an existing pet
     *
     * @param body Pet object that needs to be added to the store
     */
    public updatePet (body: models.Pet, extraHttpRequestParams?: any ) : Observable<{}> {
        const path = this.basePath + '/pet';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'body' is set
        if (!body) {
            throw new Error('Missing required parameter body when calling updatePet');
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

    /**
     * Updates a pet in the store with form data
     *
     * @param petId ID of pet that needs to be updated
     * @param name Updated name of the pet
     * @param status Updated status of the pet
     */
    public updatePetWithForm (petId: number, name?: string, status?: string, extraHttpRequestParams?: any ) : Observable<{}> {
        const path = this.basePath + '/pet/{petId}'
            .replace('{' + 'petId' + '}', String(petId));

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        let formParams = new URLSearchParams();

        // verify required parameter 'petId' is set
        if (!petId) {
            throw new Error('Missing required parameter petId when calling updatePetWithForm');
        }
        headerParams.set('Content-Type', 'application/x-www-form-urlencoded');

        formParams['name'] = name;

        formParams['status'] = status;

        let requestOptions: RequestOptionsArgs = {
            method: 'POST',
            headers: headerParams,
            search: queryParameters
        };
        requestOptions.body = formParams.toString();

        return this.http.request(path, requestOptions)
            .map((response: Response) => response.json());
    }

    /**
     * uploads an image
     *
     * @param petId ID of pet to update
     * @param additionalMetadata Additional data to pass to server
     * @param file file to upload
     */
    public uploadFile (petId: number, additionalMetadata?: string, file?: any, extraHttpRequestParams?: any ) : Observable<models.ApiResponse> {
        const path = this.basePath + '/pet/{petId}/uploadImage'
            .replace('{' + 'petId' + '}', String(petId));

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        let formParams = new URLSearchParams();

        // verify required parameter 'petId' is set
        if (!petId) {
            throw new Error('Missing required parameter petId when calling uploadFile');
        }
        headerParams.set('Content-Type', 'application/x-www-form-urlencoded');

        formParams['additionalMetadata'] = additionalMetadata;

        formParams['file'] = file;

        let requestOptions: RequestOptionsArgs = {
            method: 'POST',
            headers: headerParams,
            search: queryParameters
        };
        requestOptions.body = formParams.toString();

        return this.http.request(path, requestOptions)
            .map((response: Response) => response.json());
    }

}
