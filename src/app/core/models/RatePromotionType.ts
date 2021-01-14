import { RatePromotion } from './RatePromotion';
export class RatePromotionType{

    constructor(
      public _id?:string,
      public name?:string,
      public description?:String,
      public icon?:String,
      public ratePromotions: RatePromotion= {},
     ) {
  
    }
  }
  