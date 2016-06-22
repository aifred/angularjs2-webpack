'use strict';
import * as models from './models';

export interface DataResponse {
    

    boilerplateList?: Array<models.EService>;

    message?: string;

    status?: string;
}
