import {User} from './user';

export class ClientsApi extends User {
  constructor(
    public _id?: string,
    public nameComapny?: string,
    public nationality?: string
  ) {
    super();
  }
}
