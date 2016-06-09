import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { RestResponseData } from 'model/RestResponseData';
import { EServiceResponseData } from 'model/EServiceResponseData';

@Injectable()
export class EServiceService {
	constructor(private http: Http) {}

	private GET_ESERVICE_URL = 'http://192.168.2.72:10039/boilerplate/retrieveBoilerplate';

	getEServices(): Observable<EServiceResponseData[]> {
		return this.http.get(this.GET_ESERVICE_URL)
						.map(this.extractData)
						.catch(this.handleError);
	}

	private extractData(res: Response) {
		let body = res.json();
		return body.data || {};		
	}

	private handleError(error: any) {
		// In a real world app, we might use a remote logging infrastructure
		// we'd also dig deeeper into error to get a better message
		let errMsg = (error.message) ? error.message: error.status? `${error.status} - ${error.statusText}` : `Server error`;
		console.error(errMsg); // log to console instead
		return Observable.throw(errMsg);
	}
}