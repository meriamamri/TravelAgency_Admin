import {Account} from './account';

export class User extends Account {

    constructor(public idU?: number,
                public firstName ?: string,
                public lastName ?: string,
                public email?: string,
                public phone?: number,
                public cinOrPassport?: string,
                public nationality?: string
    ) {
        super();
    }


}