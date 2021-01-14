import { RatePromotionType } from './RatePromotionType';
export class RatePromotion{

    constructor(
      public _id?:string,
      public code?:String,
      public name?:string,
      public from?:Date,
      public to?:Date,
      public minStay?:Number,
      public value?:Number,
      public unit?:String,
      public dateEnd?:Date,
      public totalDemiPromotion?:Boolean,
     // public ratePromotiontype: RatePromotionType= {},
    
     // _rateType:[{type:Schema.Types.ObjectId, ref: 'RateType' }], 
     // _roomOccupancy:[{ type: Schema.Types.ObjectId, ref: 'RoomOccupancy'}], 
      //_roomType:[{ type: Schema.Types.ObjectId, ref: 'RoomType'}], 
     ) {
  
    }
  }
  