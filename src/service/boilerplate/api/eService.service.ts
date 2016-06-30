import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { BASE_URLS } from 'config/url.config';
import { RestResponseData } from 'service/boilerplate/model/RestResponseData';
import { RestResponse } from 'service/boilerplate/model/RestResponse';
import { EServiceResponseData } from 'service/boilerplate/model/EServiceResponseData';

@Injectable()
export class EServiceService {
	constructor(private http: Http) {}

	private ESERVICE_BASE_URL = BASE_URLS.accenture.basePath + BASE_URLS.accenture.eserviceResource.contextRoot;

	createEService(newEservice:EServiceResponseData): Observable<RestResponse> {
			let body = JSON.stringify({newEservice});
			let headers = new Headers({'Content-Type':'application/json'});
			let options = new RequestOptions({headers : headers});

			return this.http.post(this.ESERVICE_BASE_URL,body,options)
											.map(this.extractData)
											.catch(this.handleError);
	}

	updateEService(existingEservice:EServiceResponseData): Observable<RestResponse> {
			let body = JSON.stringify({existingEservice});
			let headers = new Headers({'Content-Type':'application/json'});
			let options = new RequestOptions({headers : headers});

			return this.http.put(this.ESERVICE_BASE_URL+'/'+existingEservice.id,body,options)
											.map(this.extractData)
											.catch(this.handleError);
	}

	getEServices(): Observable<EServiceResponseData[]> {
		let response = this.http.get(this.ESERVICE_BASE_URL)
															.map((res) =>
																	{
																		let body = this.extractData(res);
																		return body.boilerplateList;
																	})
															.catch(this.handleError);
		return response;
	}

	testFailureGetEServices(): Observable<EServiceResponseData[]> {
		let response = this.http.get(this.ESERVICE_BASE_URL+'/failure')
															.map((res) =>
																	{
																		let body = this.extractData(res);
																		return body.boilerplateList;
																	})
															.catch(this.handleError);
		return response;
	}

	getEService(id: number): Observable<EServiceResponseData[]> {
			let response = this.http.get(this.ESERVICE_BASE_URL+'/'+id)
																.map((res) =>
																			{
																				let body = this.extractData(res);
																				return body.boilerplateList;
																			})
																.catch(this.handleError);
			return response;
	}

	private extractData(res: Response) {
		console.log("URL: "+res.url);
		console.log("Status: "+res.status);
		console.log("Status Message: "+res.statusText);
		console.log("Raw Response: ");
		console.log(res);
		let body = res.json();
		console.log(body);
		return body.data || {};
	}

	private handleError(error: any) {
		// In a real world app, we might use a remote logging infrastructure
		// we'd also dig deeeper into error to get a better message
		let errMsg = (error.message) ? error.message: error.status;
		console.error(error); // log to console instead
		console.error(error.headers);
		if(error.status === 302) {
				window.location.href = error.url;
		}

		return Observable.throw("Error Occurred");
	}
}
