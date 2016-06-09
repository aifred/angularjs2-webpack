import { RestResponseData } from 'model/RestResponseData';
//let RestResponseData = require('model/RestResponseData');

export class RestResponse {
	private _status: string;
	private _message: string;
	private _data: RestResponseData;

	constructor(newStatus: string) {}

	get status() {
		return this._status;
	}
	set status(newStatus: string) {
		this._status = newStatus;
	}

	get message() {
		return this._message;
	}
	set message(newMessage: string) {
		this._message = newMessage;
	}

	get data() {
		return this._data;
	}
	set data(newData: RestResponseData) {
		this._data = newData;
	}
}