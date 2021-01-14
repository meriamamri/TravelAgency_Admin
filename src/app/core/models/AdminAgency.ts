import {User} from './user';
import {Agency} from './Agency';

export class AdminAgency extends User {
    constructor(
        public _id?: string,
        public accepted?: boolean,
        public agency?: string
    ) {
        super();
    }
}
