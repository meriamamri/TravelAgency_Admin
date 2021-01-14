import { ProductFacility } from './ProductFacility';
export class ProductFacilityType{

    constructor(
      public _id?:string,
      public name?:string,
      public productfacility: ProductFacility= {},
     ) {
  
    }
  }
  