import { EstabService } from './EstabService';

export class EstabServiceCategory{

    constructor(
      public _id?: string,
      public name?: string,
      public icon?: string,
      public _services: EstabService[]= [{}],
     ) {
  
    }
  }
  