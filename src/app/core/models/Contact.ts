import { Establishment } from './Establishment';

export class Contact{

  constructor(
    public _id?: number,
    public firstName?: string,
    public lastName?: string,
    public email?: string,
    public phone?: string,
    public job?: string,
    public establishment?: string

     ) {

  }
}
