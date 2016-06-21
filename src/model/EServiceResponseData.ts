export class EServiceResponseData {
	private _id:number;
	private _eservicename: string;
	private _eserviceid: string;
	private _nric: string;
	private _deleteFlag: string;
	private _version: number;
	private _createdBy: string;
	private _createdOn: string;
	private _updatedBy: string;
	private _updatedOn: string;

	constructor(newId: number = null,
							newEserviceName: string = null,
							newEserviceId: string = null,
							newNric: string = null,
							newDeleteFlag: string = null,
							newVersion: number = null,
							newCreatedBy: string = null,
							newCreatedOn: string = null,
							newUpdatedBy: string = null,
							newUpdatedOn: string = null) {
		this.id = newId;
		this.eserviceName = newEserviceName;
		this.eserviceId = newEserviceId;
		this.nric = newNric;
		this.deleteFlag = newDeleteFlag;
		this.version = newVersion;
		this.createdBy = newCreatedBy;
		this.createdOn = newCreatedOn;
		this.updatedBy = newUpdatedBy;
		this.updatedOn = newUpdatedOn;
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
