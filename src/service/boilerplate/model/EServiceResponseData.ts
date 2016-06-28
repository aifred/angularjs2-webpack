export class EServiceResponseData {
	private _id:number = null;
	private _eservicename: string = null;
	private _eserviceid: string = null;
	private _nric: string = null;
	private _deleteFlag: string = null;
	private _version: number = null;
	private _createdBy: string = null;
	private _createdOn: string = null;
	private _updatedBy: string = null;
	private _updatedOn: string = null;

	constructor() {
		this._id = null;
		this._eservicename = null;
		this._eserviceid = null;
		this._nric = null;
		this._deleteFlag = null;
		this._version = null;
		this._createdBy = null;
		this._createdOn = null;
		this._updatedBy = null;
		this._updatedOn = null;
	}

	get id(): number {
		return this._id;
	}
	set id(newId: number) {
		this._id = newId;
	}

	get eserviceName(): string {
		return this._eservicename;
	}
	set eserviceName(newName: string) {
		this._eservicename = newName;
	}

	get eserviceId(): string {
		return this._eserviceid;
	}
	set eserviceId(newEId: string) {
		this._eserviceid = newEId;
	}

	get nric(): string {
		return this._nric;
	}
	set nric(newNric: string) {
		this._nric = newNric;
	}

	get deleteFlag(): string {
		return this._deleteFlag;
	}
	set deleteFlag(isDeleted: string) {
		this._deleteFlag = isDeleted;
	}

	get version(): number {
		return this._version;
	}
	set version(newVersion: number) {
		this._version = newVersion;
	}

	get createdBy(): string {
		return this._createdBy;
	}
	set createdBy(newCreatedBy: string) {
		this._createdBy = newCreatedBy;
	}

	get createdOn(): string {
		return this._createdOn;
	}
	set createdOn(newCreatedOn: string) {
		this._createdOn = newCreatedOn;
	}

	get updatedBy(): string {
		return this._updatedBy;
	}
	set updatedBy(newUpdatedBy: string) {
		this._updatedBy = newUpdatedBy;
	}

	get updatedOn(): string {
		return this._updatedOn;
	}
	set updatedOn(newUpdatedOn: string) {
		this._updatedOn = newUpdatedOn;
	}
}
